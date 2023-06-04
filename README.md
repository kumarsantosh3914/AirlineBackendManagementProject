# Airline Backend System

## Objectives

We need to build a backend system that can support different features for an airline company. Our end user will be someone who wants to book flights and query about flights, so we need a robust system to help them give the best experience possible. This doc is solely going to focus on the backend part of the system. We want to prepare the whole backend
keeping the fact in mind the code base should be as maintainable as possible.

## Requirements

- A user should be able to search for flights one place to another.
- The user should be able to mention the source and destination details.
- The user should be able to select the date of the journey.
  - [V2] user should be able to search for return flights and multi-city flights.
  - The user should be able to select the class of the flights [Non-mandatory]
  - User should be able to select the no of seats they want to book [Non-mandatory]
- Now based on the above data, we will list down the flights.
- We should show our users the best avaliable flights at the top based on the time-period of flights and then based on the price.
- We need to support pagination so that we can list chunks of flights at one point in time.
- We should support filters of the flights based on the price, Departure time, Duration, Airline, and Stops.
- [v2] We can add support for more filters.
- A user should be able to book a flight considering that the user is registered on the platform.
- Users should be able to cancel a booking and then based on some criteria we can initiate a refund for them.
- Users should be able to request and book excess luggage for every flight.
- For making a booking, the user has to make a payment [dummy].
- Tracking flight price should be possible, the user should be notified about any price drops on any delays.
- User should be able to list their previous and upcoming flights.
- User should be able to download Boarding pass if they have done online check-in
- An online check-in mechanism should be supported
- Notifications via email for completing online check-in before 3 hours of departure.
- Notifications to users about any flights delay.
- User should be able to review the flight journey if and only if they have booked a flight.
- The review mechanism should involve a star rating along with a comment.
- While listing any flight we should also display the review of the flight.
- User should be able to authenticate to our system using email and password.
  - [v2] Support ticketing, where user can raise their queries.
  - Listing FAQ which will be static data.
  - [v2] prepare seat selection
  - Coupons for discounts and offers.

# Search And Flights Service

- Create Flights
- Delete Flights
- Update Flights
- Search Flights
  - Based on multiple filtration we search for flights
  - pagination
  
![alt text](./airline_image.png)

### Here is the LLD Design

![HLD](./airline-image.png)

# **Project Explanation**

The airline backend system aimed at providing various features to users who want to book flights and query flight information The system is designed to be robust and provide the best possible user experience. Here is a detailed explanation of the project based on the requirements provided:

  1. Flight Search: Users can search for flights by specifying the source and destination details, as well as the date of the journey. In version 2, users will also be able to search for return flights and multi-city flights.

  2. Flight Filtering: The system should support filtering of flights based on criteria such as price, departure time, duration, airline, and stops. Additional filters can be added in future versions.

  3. Flight Sorting: The system should display the available flights, prioritizing the best options based on the time-period of flights and then the price.

  4. Pagination: To handle a large number of flights, the system should support pagination, allowing the listing of flights in manageable chunks.

  5. Flight Booking: Registered users can book flights using the system. The booking process includes selecting the desired flight, class, and the number of seats to be booked.

  6. Payment and Refunds: To complete a booking, users need to make a payment (dummy). The system should also handle booking cancellations and initiate refunds based on predefined criteria.

  7. Flight Price Tracking: Users can track flight prices and receive notifications about any price drops or delays.

  8. Excess Luggage: Users can request and book excess luggage for each flight.

  9. Flight History: Users can view their previous and upcoming flights, and download their boarding passes if they have completed online check-in.

  10. Online Check-in: The system should support an online check-in mechanism, allowing users to check-in before their flight. Users should receive email notifications for completing online check-in at least 3 hours before departure.

  11. Flight Reviews: Users who have booked a flight can review their journey by providing a star rating and comment. Flight listings should display the reviews for each flight.

  12. User Authentication: Users can authenticate to the system using their email and password.

  13. Ticketing and FAQs: The system should support a ticketing feature, allowing users to raise queries. Additionally, there should be a listing of frequently asked questions (FAQ) as static data.
  
  14. Seat Selection (version 2): The system can include a feature where users can select their preferred seats during the booking process.

  15. Coupons and Discounts: The system can incorporate a coupon mechanism to offer discounts and promotional offers.

 - To implement the project, you have divided the backend into separate services, including API Gateway, AuthService, BookingService, FlightAndSearch, and ReminderService. You are building the entire backend using Node.js, following the MVC (Model-View-Controller) design pattern.

 - This comprehensive backend system will provide users with a seamless experience in searching, booking, and managing flights. It covers a wide range of features and functionalities expected from an airline platform, ensuring efficient flight management and user satisfaction.