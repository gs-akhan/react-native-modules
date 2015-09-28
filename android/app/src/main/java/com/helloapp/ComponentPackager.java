
package com.helloapp;

import java.util.ArrayList;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;


public class ComponentPackager implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new MyCustomModule(reactContext));

    return modules;
  }

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
      return new ArrayList();
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
      return new ArrayList();
  }
}