## About 'Find my hotel'


The APP consumes data from the following URL 

https://services.lastminute.com/mobile/stubs/hotels

It displays the list and all the details of the hotels contained in the response. The UI and UX used was all created by me having in mind successful apps that show data about hotels.

- momondo
- Booking.com
- Tripadvisor

I have provided [a video](https://1drv.ms/v/s!Apld_UHHLn7Cgv9CA3v1BZHK3hyWYA) regarding the app and all the possible functionalities.



To develop this app it was used some external libs:
- [react-navigation](https://reactnavigation.org/docs/en/4.x/getting-started.html);
- [react-native-maps](https://github.com/react-native-community/react-native-maps);
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image);


1. The app opens in a Screen with a vertical **list of hotels**. The user sees a loading view while his data is beeing fetched. For each hotel on the list, you can see an image, the name, stars and user rating. 
   - If some value does not existes, the respective section will be hidden, in case of an image it will show a default one.
   - If there's no hotels, an empty list message will be shown too.
   - It's possible refresh the list in order to trigger a new fetch.
   - [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) is used for the images on this list.
   
3. There is a sorting functionality here, it's a simple toggle button that sorts in ascending/descending order regarding the user rating.
  - It's possible to get the default order by refreshing the list.
  
4. There is a possibility to show some hotels filtered by the classification of the user rating.
  - The filtering can be reset when refreshing the list.
  - The classification was defined using the following logic:
  
  
  ```
  
  if (rating >= 0 && rating < 3) return VERY_LOW;
  if (rating >= 3 && rating < 5) return LOW;
  if (rating >= 5 && rating < 7) return MEDIUM;
  if (rating >= 7 && rating < 9) return HIGH;
  if (rating >= 9 && rating <= 10) return VERY_HIGH;
  
  VERY_LOW = 'Bad';
  LOW = 'Poor';
  MEDIUM = 'Average';
  HIGH = 'Great';
  VERY_HIGH = 'Excellent';
  
  
  ```


5. The Hotel Detail shows all the other information not shown on the previews screen.
   - [react-native-maps](https://github.com/react-native-community/react-native-maps) is used here to show the map with the hotel as a marker.
   - If some value does not exist, the repective section will be hidden.
   - There is a image gallery to show all the hotel images.
   - It was added some logic to format a new check in/out info, example: '20:00' -> 8 PM, as the one made for the user rating, example, 9.0 -> Excellent.

## Before starting
I assume you have a MAC setted up with npm, react native, xcode, android studio... If not, i leave here this article to follow some [steps in order to have a react-native environment](https://nandovieira.com/setting-up-react-native-on-macos-mojave).

## Getting started

After you getting the project on your MAC you need to follow some steps in order to make it running.

#### Install Dependencies
With your terminal execute the following command on the project root.

`$ npm install`

#### Set up Android

`$ cd android/`

Create a file named local.properties and add your android SDK path. 
Below i show my file with my location.

```
## This file must NOT be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
#Thu Jul 11 12:33:58 WEST 2019

sdk.dir=/Users/tiagofreitas/Library/Android/sdk

```
Go back to the root folder.

### Android Google Maps [OPTIONAL]
In order to use google maps on android you need to add your Google Maps API Key on the AndroidManifest.

path: `android/app/src/main/AndroidManifest.xml`

```
      <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_GOOGLE_MAPS_API_KEY"/>

```

### Running on Android
You can run directly on a device or on the android emulator. 
For the emulator, i recommend you to first open it and then execute the command.

`react-native run-android`

### Set UP iOS
`cd /ios`

`pod install`

`cd ..`

### Running on iOS
You can type the following command on your terminal and it will open an iOS emulator with the app installed. Or you can just open the findMyHotel.xcworkspace file with xCode and execute it.

`react-native run-ios`


### End

I hope you enjoyed the way i developed this app.
  
