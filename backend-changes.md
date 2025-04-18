# Backend Changes Required

## Schema Modifications

### Donar Table
1. Add `createdAt` and `updatedAt` timestamps
2. Add `isVerified` boolean field for KYC verification status
4. Add `active` boolean field to track account status

### DonarTransection Table
1. Add `createdAt` and `updatedAt` timestamps
2. Add `pickupTime` field (DateTime)
3. Add `deliveryTime` field (DateTime)
4. Add `estimatedPickupTime` field (DateTime)
5. Add `estimatedDeliveryTime` field (DateTime)
6. Add `foodType` enum field (VEG/NON-VEG)
7. Add `specialInstructions` text field
8. Add `donarRating` and `volunteerRating` fields
9. Add `donarFeedback` and `volunteerFeedback` fields
10. Add `cancellationReason` field (nullable)

### NGO Table
1. Add `createdAt` and `updatedAt` timestamps
2. Add `isVerified` boolean field for KYC verification status
3. Add `profilePicture` URL field
4. Add `active` boolean field to track account status
5. Add `registrationNumber` field
6. Add `description` text field
7. Add `website` URL field (nullable)

### Volunteer Table
1. Add `createdAt` and `updatedAt` timestamps
2. Add `isVerified` boolean field for KYC verification status
3. Add `profilePicture` URL field
4. Add `active` boolean field to track account status
5. Add `vehicleType` enum field (BICYCLE/MOTORCYCLE/CAR)
6. Add `vehicleNumber` field (nullable)
7. Add `maxDistance` field (in km)
8. Add `rating` field (average rating from transactions)

## Additional Requirements
1. Implement proper authentication and authorization
2. Add email verification system
3. Add phone number verification system
4. Implement file upload for KYC documents
5. Add proper validation for all fields
6. Implement proper error handling
7. Add proper logging system
8. Implement proper security measures
9. Add proper indexing for frequently queried fields
10. Implement proper caching mechanism 


Volunteer Dasahboard: givev query to cursor and make dashboard better
change order
write donate instead of transaction
haptic tab ke upar ek chota ttab where we will show order details
make donation like zomato

NGO Dashboard: give feedback mein photo posting like instagram
and reuse same zomato component

VOLUNTEER DASHBOARD: tOGGLE BUTTON IS ACTIVE OR NOT
IF HE IS ACTIVE SHOW NEAREST DONATION PLACE
JAISEE HI CLICKS ON "ACCEPT" LOCATION AUTOMATICALLY STARTS SHARING,
DESTINATION PE GOOGLE MAPS DALNA HAI



Donor UI change from carousel and fundraising part
Donors are individual or institutional

Personalization Profiling and backend algorithm for rating
Keep a track of donations doone by volunteer so that we can give each donor a star delivery boy

NGO Information about carousel

Admin dashboard view for number of NGO, engagement of NGO, donor ka engagement, volunteer engagement

add unique neighbour matching algorithm

Mahek to-do: donor dashboard UI change
             
When new donation is created (when donor clicks on donate after the form) show a screen saying "Finding nearest volunteer near your" loading page type crazy UI page.
Maybe in the UI we can show multiple points in the map jaha pe apan random points pe point karke bata sakte hai ki yaha volunteer h yaha volunteer h aise karke vo volunteer ke location pe accept hoga

After that we will show (uber ride accepted type page)
Show map
show name
show vehicleNumber
show photo etc