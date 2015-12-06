### Rezo App

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


