// const axios = require("axios");

// const { BookingRepository } = require("../repository/index");
// const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
// const { ServiceError } = require("../utils/errors");

// class BookingService {
//   constructor() {
//     this.bookingRepository = new BookingRepository();
//   }

//   async createBooking(data) {
//     try {
//       console.log("service data", data);
//       const flightId = data.flightId;
//       const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;

//       // Retrieve flight data from the flight service API
//       const response = await axios.get(getFlightRequestURL);
//       const flightData = response.data.data;
//       console.log(flightData);

//       let priceOfTheFlight = flightData.price;

//       // Check if the requested number of seats exceeds the available seats in the flight
//       if (data.noOfSeats > flightData.totalSeats) {
//         throw new ServiceError(
//           "Something went wrong in booking process",
//           "Insufficient seats in the flight"
//         );
//       }

//       // Calculate the total cost of the booking
//       const totalCost = priceOfTheFlight * data.noOfSeats;

//       // Create the booking payload by merging the provided data with the total cost
//       const bookingPayload = { ...data, totalCost };

//       // Create a new booking using the booking repository
//       const booking = await this.bookingRepository.create(bookingPayload);

//       // Update the flight's total cost by subtracting the number of booked seats
//       const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
//       console.log("update flight", updateFlightRequestURL);
//       await axios.patch(updateFlightRequestURL, {
//         totalCost: flightData.totalCost - booking.noOfSeats,
//       });

//       // Update the booking status to "Booked"
//       const finalBooking = await this.bookingRepository.update(booking.id, {
//         status: "Booked",
//       });

//       return finalBooking;
//     } catch (error) {
//       console.log(error);

//       // If the error is a known repository or validation error, rethrow it
//       if (error.name == "RepositoryError" || error.name == "ValidationError") {
//         throw error;
//       }

//       // If the error is not a known error type, throw a generic ServiceError
//       throw new ServiceError();
//     }
//   }
// }

// module.exports = BookingService;

const axios = require("axios");

const { BookingRepository } = require("../repository/index");
const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
const { ServiceError } = require("../utils/errors");

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const flightId = data.flightId;
      const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
      const response = await axios.get(getFlightRequestURL);
      const flightData = response.data.data;
      let priceOfTheFlight = flightData.price;
      if (data.noOfSeats > flightData.totalSeats) {
        throw new ServiceError(
          "Something went wrong in the booking process",
          "Insufficient seats in the flight"
        );
      }
      const totalCost = priceOfTheFlight * data.noOfSeats;
      const bookingPayload = { ...data, totalCost };

      const booking = await this.bookingRepository.create(bookingPayload);
      console.log("booking created", booking);
      const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
      console.log("update the flights", updateFlightRequestURL);
      await axios.patch(updateFlightRequestURL, {
        totalSeats: flightData.totalSeats - booking.noOfSeats,
      });
      const finalBooking = await this.bookingRepository.update(booking.id, {
        status: "Booked",
      });
      console.log(finalBooking);
      return finalBooking;
    } catch (error) {
      console.log(error);
      if (error.name == "RepositoryError" || error.name == "ValidationError") {
        throw error;
      }
      throw new ServiceError();
    }
  }
}

module.exports = BookingService;
