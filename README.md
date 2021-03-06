# Introduction

This repo stores the notes taken for the following Udemy course: [React Native - The Practical Guide](https://www.udemy.com/course/react-native-the-practical-guide) [Started: 18/1/21]

## Section 1: Getting Started

### What is React Native?

- **React**: A JavaScript Library for building User Interfaces
- **React Native**:
  - A collection of React components, which can be compiled to Native Widgets
  - Access to Native Platform APIs
  - Connects JavaScript and Native Platform Code

### How React Native Works

- Special components such as **View**, **Text**, etc. are used in React Native, and are compiled to **Native Applications** - **Views** are compiled.
- React Native maps re-usable components to the respective platform equivalents.
- Other logic in JavaScript aside from views: **runs on a JavaScript thread hosted by React Native App**

![](https://snipboard.io/7jdGlC.jpg)

### Expo vs React Native CLI

**Expo**

- Third party service 
- Managed App Development, development environment is simplified
- Limited to Expo Ecosystem

**React Native CLI**

- Maintained by RN team and community
- Basic setup: Xcode and Android Studio needed and so on. Setup process for extra features is longer than Expo
- More flexible - can be integrated with any Native Code

**This course uses Expo**

- 'Expo Client' - app useful for development
- Expo allows for app to be published standalone, no reliance on Expo Client

**How Expo Works - Image**

![](https://snipboard.io/Jjapof.jpg)

### Creating our First React Native App - using Expo

[Expo Documentation for installing and setting up an Expo application](https://docs.expo.io/get-started/installation/)

### More on RN apps 

- No / little cross platform styling of components
- Only a basic set of pre-built components - based on the basics we are provided
- Tools available for responsive design - no responsiveness out of the box

### Running the App on Android / iOS

- [Android Simulator](https://docs.expo.io/workflow/android-studio-emulator/)
- [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/)

### Course Outline 

![](https://snipboard.io/HwR4uQ.jpg)

## Section 2: Basics of React Native

- Styling: There are two options, inline styles and StyleSheet Objects - the styling is based off of CSS - only a subset of properties are supported

**App Being Built in this section - Goal Setting App:**

![Goal Setting App](https://snipboard.io/QTAgtu.jpg)

- View: Main usage is to help lay components out and apply any styling
- Common to have different Views which are nested inside a main View

```js
  return (
    <View style={styles.container}>
      <View>...</View>
      <View>...</View>
    </View>
  );
```

### Flexbox in React Native

- All View uses **flexbox** by default
- justifyContent: Align items on the **main axis** - e.g. if the flex direction is **row**, this would be the **X Axis**.
- alignItems: Align items on the **cross axis** - e.g. if the flex direction is **row**, this would be the **Y Axis**
- flex: Applied to items inside of a flex container, e.g. a View inside another view
'flex' takes a number which will describe how much space it can take within its flex container. 

### Using StyleSheets
```js
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

{ ... }

<View style={styles.screen}>
```

### Working with State and Events