
const db = require('./models');

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');

    // Create sample users
    const user1 = await db.User.create({
      name: 'John Doe',
      email: 'john.doe@example.com'
    });

    const user2 = await db.User.create({
      name: 'Jane Smith',
      email: 'jane.smith@example.com'
    });

    // Create sample trips
    const trip1 = await db.Trip.create({
      name: 'Paris Getaway',
      destination: 'Paris, France',
      start_date: new Date('2024-12-20'),
      end_date: new Date('2024-12-27'),
      UserId: user1.id
    });

    const trip2 = await db.Trip.create({
      name: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      start_date: new Date('2025-03-15'),
      end_date: new Date('2025-03-25'),
      UserId: user2.id
    });

    // Create sample itinerary items
    await db.ItineraryItem.create({
      activity: 'Visit the Eiffel Tower',
      start_time: new Date('2024-12-21T10:00:00'),
      end_time: new Date('2024-12-21T12:00:00'),
      TripId: trip1.id
    });

    await db.ItineraryItem.create({
      activity: 'Explore the Louvre Museum',
      start_time: new Date('2024-12-22T11:00:00'),
      end_time: new Date('2024-12-22T17:00:00'),
      TripId: trip1.id
    });

    await db.ItineraryItem.create({
      activity: 'Visit the Shibuya Crossing',
      start_time: new Date('2025-03-16T18:00:00'),
      end_time: new Date('2025-03-16T19:00:00'),
      TripId: trip2.id
    });

    console.log('Sample data created successfully.');
  } catch (error) {
    console.error('Error creating sample data:', error);
  } finally {
    await db.sequelize.close();
  }
};

seed();
