const mongoose = require('mongoose');
const { db } = require('./db');
const Earning = require('../models/EarningsModel');

const performAggregation = async () => {
    await db(); // Connect to the database

    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - daysUntilMonday);
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    
    const earnings = mongoose.model('Earnings');

    const aggregation = await earnings.aggregate([
        {
            $match: {
                date: {
                    $gte: startOfWeek,
                    $lte: endOfWeek,
                },
                amount: {
                    $ne: null
                },
                trip: {
                    $ne: null
                 }
            },
        },
        {
            $group: {
                _id: null,
                totalEarnings: { $sum: '$amount' },
                totalTrips: { $sum: '$trip' },
                totalMi: { $sum: { $subtract: ['$endingMi', '$startingMi'] } },
                dailyAvg: { $avg: '$amount' },
                avgTrip: {$avg: '$trip'}
            },
        },
        {
            $project: {
                totalEarnings: {
                    $trunc : [ '$totalEarnings', 2 ]
                },
                totalTrips: 1,
                totalMi: 1,
                dailyAvg: {
                    $round: ['$dailyAvg', 2]
                },
                avgTrip: {
                    $round: ['$avgTrip', 2]
                },
                compensation: {
                    $round: [{ $multiply: ['$totalMi', 0.655] }, 2]
                },
                dollarsToTrips: {
                    $cond: [
                      { $eq: ['$totalTrips', 0] },
                      '0',
                      { $round: [{ $divide: ['$totalEarnings', '$totalTrips'] }, 2] }
                    ]
                  },
                dollarsToMiles: {
                    $cond: [
                        { $eq: ['$totalMi', 0] },
                        '0',
                        { $round: [{ $divide: ['$totalEarnings', '$totalMi'] }, 2] }
                    ]
                },
                
            }
        }
    ]);
    return aggregation[0];
};

module.exports = { performAggregation };
