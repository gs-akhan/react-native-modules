package com.helloapp;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

public class MyCustomModule extends ReactContextBaseJavaModule {

// Available as NativeModules.MyCustomModule.processString
  public MyCustomModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  @ReactMethod
  public void show(String message) {
     Toast.makeText(getReactApplicationContext(), message, 1000).show();
  }
  @Override 
  public String getName() {
    return "MyCustomModule";
  }
}