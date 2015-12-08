### Rezo App

create an array of booked event dates by grabbing all events with SpaceId x.


Login Page?? just make it exist in the button


Blockout days on Calendar
  * feed calendar an array of block out dates
  * add to blocked out dates with booking

Overall Styling - 3 hrs
  * font 
  * colors

Dynamically Load Spaces - 4 hrs
  * update space table with 'pictureUrl' column
  * grid list on selection page



googleclientid heroku
816554237691-5fhpjev32egi9lp6kgqr169tc9eoov45.apps.googleusercontent.com

twilio test id
AC1ea28f94a2f50224cae22ce7e54b9896
twilio test secret
6927eb9fc0ed7f12aae37aef892a4adb

twilio live id
ACd5f45830c9c4eabc03c7fe092f8e548e
twilio live secret
1be184e51bc7074df58961339f431d28

[flow chart](https://www.lucidchart.com/documents/edit/8e01f617-2b57-4112-be6f-342c6eba27f0)

Key functionality:

User can book an event. 
User can choose between several different event spaces.
User can register with FB.
User can register with google.
User can register with usename and password.
User can login with FB.
User can login with google.
User can login with usename and password.
User can choose date for event.
User can choose time for event.
User can reserve, momentarily, date and time.
User can choose number of geusts for event.
User can choose $ amount for bar tab.
User can view a list of  pre-set menus.
User can view menu description.
User can view menu items.
User can view menu cost.
User can choose a menu.
User can save event without booking. (date will not be reserved)
User can create a profile.
User can pay by credit card.
User can receive text confirmation.
User can receive email confirmation.
User can login to to view pending events.
User can login to book events.

Admin can add event space.
Admin can use google places api to register space.
Admin can add event space address.
Admin can set event space availablity.
Admin can set event space occupancy.
Admin can add event space menu.
Admin can add event space menu details.
Admin can add event space menu cost.
Admin can view event space calendar.
Admin can view booked events at event space.
Admin can view profiles of users with booked events.


need to address one to many relationships, how to set them,
need to change owner of space to ownerId, or maybe remove completely if we can get the relationships figured out


#### Page: Home (Displays details and login)
#### Page: Space Selection
* UA: select Restaurant
* data: creates an event object w/ spaceId and userId
#### Page: Calendar
* DB: calendar is populated with unavailable dates
* UA: selects date
* data: date is added to event object
#### Page: Time and Total Guests Form
* UA: selects time and total guests
* data: added to event object
#### Page: Menu and Bar Tab selection
* UA: selects menu and tab amount
* data: added to event object
#### Page: User Profile Details Form
* DB: inputs are pre populated if data available
* UA: user submits
* DB: save user profile info
#### Page: Event Details Confirmation
* UA: users confirms
* DB: event is saved
* DB: EventMenu row is created with total menus??? optional
* side effect: text is sent to user and space owner


