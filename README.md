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
