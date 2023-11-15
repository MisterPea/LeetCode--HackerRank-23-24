/*
Design a system that manages the reservation state of n seats that are numbered from 1 to n.

Implement the SeatManager class:
• SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. 
  All seats are initially available.
• int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
• void unreserve(int seatNumber) Un-reserves the seat with the given seatNumber.
*/

class SeatManager {
  constructor(n) {
    this.numSeats = n;
    this.totalSeats = new Array(n).fill(null);
  }
}