# capacitor-maplibre

Maplibre native implementation for capacitor
Based on [`capacitor-google-maps`](https://github.com/ionic-team/capacitor-google-maps)

> [!IMPORTANT]
> This Project is still in development and currently only the web version is working

## Install

```bash
npm install capacitor-maplibre
npx cap syncf
```

## API

<docgen-index>

* [`createMap(...)`](#createmap)
* [`updateMap(...)`](#updatemap)
* [`removeMap(...)`](#removemap)
* [`setStyle(...)`](#setstyle)
* [`moveCamera(...)`](#movecamera)
* [`zoomTo(...)`](#zoomto)
* [`easeTo(...)`](#easeto)
* [`queryRenderedFeatures(...)`](#queryrenderedfeatures)
* [`querySourceFeatures(...)`](#querysourcefeatures)
* [`resetNorthPitch(...)`](#resetnorthpitch)
* [`fitBounds(...)`](#fitbounds)
* [`addLayer(...)`](#addlayer)
* [`getLayer(...)`](#getlayer)
* [`getLayersOrder(...)`](#getlayersorder)
* [`moveLayer(...)`](#movelayer)
* [`updateLayer(...)`](#updatelayer)
* [`removeLayer(...)`](#removelayer)
* [`addSource(...)`](#addsource)
* [`getSource(...)`](#getsource)
* [`updateSource(...)`](#updatesource)
* [`removeSource(...)`](#removesource)
* [`setProperty(...)`](#setproperty)
* [`getLayerProperty(...)`](#getlayerproperty)
* [`getPaintProperty(...)`](#getpaintproperty)
* [`addMarker(...)`](#addmarker)
* [`updateMarker(...)`](#updatemarker)
* [`removeMarker(...)`](#removemarker)
* [`showUserLocation(...)`](#showuserlocation)
* [`updateUserLocation(...)`](#updateuserlocation)
* [`hideUserLocation(...)`](#hideuserlocation)
* [`onScroll(...)`](#onscroll)
* [`onResize(...)`](#onresize)
* [`onDisplay(...)`](#ondisplay)
* [`dispatchMapEvent(...)`](#dispatchmapevent)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### createMap(...)

```typescript
createMap(options: MapCreateOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#mapcreateoptions">MapCreateOptions</a></code> |

--------------------


### updateMap(...)

```typescript
updateMap(options: MapEvent<MapUpdateOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapupdateoptions">MapUpdateOptions</a>&gt;</code> |

--------------------


### removeMap(...)

```typescript
removeMap(options: MapEvent<any>) => Promise<void>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;any&gt;</code> |

--------------------


### setStyle(...)

```typescript
setStyle(options: MapEvent<string>) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;string&gt;</code> |

--------------------


### moveCamera(...)

```typescript
moveCamera(options: MapEvent<FlyToOptions>) => Promise<void>
```

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#flytooptions">FlyToOptions</a>&gt;</code> |

--------------------


### zoomTo(...)

```typescript
zoomTo(options: MapEvent<ZoomToOptions>) => Promise<void>
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#zoomtooptions">ZoomToOptions</a>&gt;</code> |

--------------------


### easeTo(...)

```typescript
easeTo(options: MapEvent<EaseToOptions>) => Promise<void>
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#easetooptions">EaseToOptions</a>&gt;</code> |

--------------------


### queryRenderedFeatures(...)

```typescript
queryRenderedFeatures(options: MapEvent<QueryRenderedFeaturesData>) => Promise<MapGeoJSONFeature[]>
```

| Param         | Type                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#queryrenderedfeaturesdata">QueryRenderedFeaturesData</a>&gt;</code> |

**Returns:** <code>Promise&lt;MapGeoJSONFeature[]&gt;</code>

--------------------


### querySourceFeatures(...)

```typescript
querySourceFeatures(options: MapEvent<QuerySourceFeatureData>) => Promise<MapGeoJSONFeature[]>
```

| Param         | Type                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#querysourcefeaturedata">QuerySourceFeatureData</a>&gt;</code> |

**Returns:** <code>Promise&lt;MapGeoJSONFeature[]&gt;</code>

--------------------


### resetNorthPitch(...)

```typescript
resetNorthPitch(options: MapEvent<AnimationOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#animationoptions">AnimationOptions</a>&gt;</code> |

--------------------


### fitBounds(...)

```typescript
fitBounds(options: MapEvent<MapFitBoundsOptions>) => Promise<void>
```

| Param         | Type                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapfitboundsoptions">MapFitBoundsOptions</a>&gt;</code> |

--------------------


### addLayer(...)

```typescript
addLayer(options: MapEvent<LayerAddOptions>) => Promise<void>
```

| Param         | Type                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#layeraddoptions">LayerAddOptions</a>&gt;</code> |

--------------------


### getLayer(...)

```typescript
getLayer(options: MapEvent<string>) => Promise<LayerSpecification | undefined>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;string&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#layerspecification">LayerSpecification</a>&gt;</code>

--------------------


### getLayersOrder(...)

```typescript
getLayersOrder(options: MapEvent<void>) => Promise<LayerSpecification[]>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;void&gt;</code> |

**Returns:** <code>Promise&lt;LayerSpecification[]&gt;</code>

--------------------


### moveLayer(...)

```typescript
moveLayer(options: MapEvent<LayerMoveOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#layermoveoptions">LayerMoveOptions</a>&gt;</code> |

--------------------


### updateLayer(...)

```typescript
updateLayer(options: MapEvent<LayerSpecification>) => Promise<void>
```

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#layerspecification">LayerSpecification</a>&gt;</code> |

--------------------


### removeLayer(...)

```typescript
removeLayer(options: MapEvent<LayerRemoveOptions>) => Promise<void>
```

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#layerremoveoptions">LayerRemoveOptions</a>&gt;</code> |

--------------------


### addSource(...)

```typescript
addSource(options: MapEvent<SourceAddOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#sourceaddoptions">SourceAddOptions</a>&gt;</code> |

--------------------


### getSource(...)

```typescript
getSource(options: MapEvent<string>) => Promise<Source | undefined>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;string&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#source">Source</a>&gt;</code>

--------------------


### updateSource(...)

```typescript
updateSource(options: MapEvent<SourceUpdateOptions>) => Promise<void>
```

| Param         | Type                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#sourceupdateoptions">SourceUpdateOptions</a>&gt;</code> |

--------------------


### removeSource(...)

```typescript
removeSource(options: MapEvent<SourceRemoveOptions>) => Promise<void>
```

| Param         | Type                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#sourceremoveoptions">SourceRemoveOptions</a>&gt;</code> |

--------------------


### setProperty(...)

```typescript
setProperty(options: MapEvent<PropertySetOptions>) => Promise<void>
```

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#propertysetoptions">PropertySetOptions</a>&gt;</code> |

--------------------


### getLayerProperty(...)

```typescript
getLayerProperty(options: MapEvent<PropertyGetOptions>) => Promise<any>
```

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#propertygetoptions">PropertyGetOptions</a>&gt;</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getPaintProperty(...)

```typescript
getPaintProperty(options: MapEvent<PropertyGetOptions>) => Promise<any>
```

| Param         | Type                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#propertygetoptions">PropertyGetOptions</a>&gt;</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addMarker(...)

```typescript
addMarker(options: MapEvent<MapMarkerAddOptions>) => Promise<string>
```

| Param         | Type                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapmarkeraddoptions">MapMarkerAddOptions</a>&gt;</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### updateMarker(...)

```typescript
updateMarker(options: MapEvent<MapMarkerUpdateOptions>) => Promise<void>
```

| Param         | Type                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapmarkerupdateoptions">MapMarkerUpdateOptions</a>&gt;</code> |

--------------------


### removeMarker(...)

```typescript
removeMarker(options: MapEvent<string>) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;string&gt;</code> |

--------------------


### showUserLocation(...)

```typescript
showUserLocation(options: MapEvent<UserLocationEvent>) => Promise<void>
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#userlocationevent">UserLocationEvent</a>&gt;</code> |

--------------------


### updateUserLocation(...)

```typescript
updateUserLocation(options: MapEvent<UserLocationEvent>) => Promise<void>
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#userlocationevent">UserLocationEvent</a>&gt;</code> |

--------------------


### hideUserLocation(...)

```typescript
hideUserLocation(options: MapEvent<void>) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;void&gt;</code> |

--------------------


### onScroll(...)

```typescript
onScroll(options: MapEvent<MapBoundsOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapboundsoptions">MapBoundsOptions</a>&gt;</code> |

--------------------


### onResize(...)

```typescript
onResize(options: MapEvent<MapBoundsOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapboundsoptions">MapBoundsOptions</a>&gt;</code> |

--------------------


### onDisplay(...)

```typescript
onDisplay(options: MapEvent<MapBoundsOptions>) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mapevent">MapEvent</a>&lt;<a href="#mapboundsoptions">MapBoundsOptions</a>&gt;</code> |

--------------------


### dispatchMapEvent(...)

```typescript
dispatchMapEvent(options: DispatchMapEventOptions) => Promise<void>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>ElementFromPointResultOptions</code> |

--------------------


### Interfaces


#### MapCreateOptions

| Prop                   | Type                                                                        |
| ---------------------- | --------------------------------------------------------------------------- |
| **`mapId`**            | <code>string</code>                                                         |
| **`element`**          | <code>HTMLElement</code>                                                    |
| **`elementWidth`**     | <code>number</code>                                                         |
| **`elementHeight`**    | <code>number</code>                                                         |
| **`elementX`**         | <code>number</code>                                                         |
| **`elementY`**         | <code>number</code>                                                         |
| **`devicePixelRatio`** | <code>number</code>                                                         |
| **`center`**           | <code>LngLat</code>                                                         |
| **`bearing`**          | <code>number</code>                                                         |
| **`pitch`**            | <code>number</code>                                                         |
| **`zoom`**             | <code>number</code>                                                         |
| **`maxZoom`**          | <code>number</code>                                                         |
| **`minZoom`**          | <code>number</code>                                                         |
| **`maxBounds`**        | <code><a href="#lnglatbounds">LngLatBounds</a></code>                       |
| **`style`**            | <code>string \| <a href="#stylespecification">StyleSpecification</a></code> |
| **`validateStyle`**    | <code>boolean</code>                                                        |


#### LngLatBounds

| Prop           | Type                |
| -------------- | ------------------- |
| **`latNorth`** | <code>number</code> |
| **`lngEast`**  | <code>number</code> |
| **`latSouth`** | <code>number</code> |
| **`lngWest`**  | <code>number</code> |


#### Array

| Prop         | Type                | Description                                                                                            |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------ |
| **`length`** | <code>number</code> | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |

| Method             | Signature                                                                                                                     | Description                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**       | () =&gt; string                                                                                                               | Returns a string representation of an array.                                                                                                                                                                                                |
| **toLocaleString** | () =&gt; string                                                                                                               | Returns a string representation of an array. The elements are converted to string using their toLocalString methods.                                                                                                                        |
| **pop**            | () =&gt; T \| undefined                                                                                                       | Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                          |
| **push**           | (...items: T[]) =&gt; number                                                                                                  | Appends new elements to the end of an array, and returns the new length of the array.                                                                                                                                                       |
| **concat**         | (...items: <a href="#concatarray">ConcatArray</a>&lt;T&gt;[]) =&gt; T[]                                                       | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **concat**         | (...items: (T \| <a href="#concatarray">ConcatArray</a>&lt;T&gt;)[]) =&gt; T[]                                                | Combines two or more arrays. This method returns a new array without modifying any existing arrays.                                                                                                                                         |
| **join**           | (separator?: string \| undefined) =&gt; string                                                                                | Adds all the elements of an array into a string, separated by the specified separator string.                                                                                                                                               |
| **reverse**        | () =&gt; T[]                                                                                                                  | Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                        |
| **shift**          | () =&gt; T \| undefined                                                                                                       | Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.                                                                                                         |
| **slice**          | (start?: number \| undefined, end?: number \| undefined) =&gt; T[]                                                            | Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.                           |
| **sort**           | (compareFn?: ((a: T, b: T) =&gt; number) \| undefined) =&gt; this                                                             | Sorts an array in place. This method mutates the array and returns a reference to the same array.                                                                                                                                           |
| **splice**         | (start: number, deleteCount?: number \| undefined) =&gt; T[]                                                                  | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **splice**         | (start: number, deleteCount: number, ...items: T[]) =&gt; T[]                                                                 | Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.                                                                                                                      |
| **unshift**        | (...items: T[]) =&gt; number                                                                                                  | Inserts new elements at the start of an array, and returns the new length of the array.                                                                                                                                                     |
| **indexOf**        | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the first occurrence of a value in an array, or -1 if it is not present.                                                                                                                                               |
| **lastIndexOf**    | (searchElement: T, fromIndex?: number \| undefined) =&gt; number                                                              | Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.                                                                                                                                      |
| **every**          | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; this is S[]       | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **every**          | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether all the members of an array satisfy the specified test.                                                                                                                                                                  |
| **some**           | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; boolean                                 | Determines whether the specified callback function returns true for any element of an array.                                                                                                                                                |
| **forEach**        | (callbackfn: (value: T, index: number, array: T[]) =&gt; void, thisArg?: any) =&gt; void                                      | Performs the specified action for each element in an array.                                                                                                                                                                                 |
| **map**            | &lt;U&gt;(callbackfn: (value: T, index: number, array: T[]) =&gt; U, thisArg?: any) =&gt; U[]                                 | Calls a defined callback function on each element of an array, and returns an array that contains the results.                                                                                                                              |
| **filter**         | &lt;S extends T&gt;(predicate: (value: T, index: number, array: T[]) =&gt; value is S, thisArg?: any) =&gt; S[]               | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **filter**         | (predicate: (value: T, index: number, array: T[]) =&gt; unknown, thisArg?: any) =&gt; T[]                                     | Returns the elements of an array that meet the condition specified in a callback function.                                                                                                                                                  |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduce**         | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduce**         | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.                      |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T) =&gt; T                           | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |
| **reduceRight**    | (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) =&gt; T, initialValue: T) =&gt; T          |                                                                                                                                                                                                                                             |
| **reduceRight**    | &lt;U&gt;(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) =&gt; U, initialValue: U) =&gt; U | Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. |


#### ConcatArray

| Prop         | Type                |
| ------------ | ------------------- |
| **`length`** | <code>number</code> |

| Method    | Signature                                                          |
| --------- | ------------------------------------------------------------------ |
| **join**  | (separator?: string \| undefined) =&gt; string                     |
| **slice** | (start?: number \| undefined, end?: number \| undefined) =&gt; T[] |


#### Feature

A feature object which contains a geometry and associated properties.
https://tools.ietf.org/html/rfc7946#section-3.2

| Prop             | Type                                          | Description                                                                                         |
| ---------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **`type`**       | <code>'<a href="#feature">Feature</a>'</code> | Specifies the type of <a href="#geojson">GeoJSON</a> object.                                        |
| **`geometry`**   | <code>G</code>                                | The feature's geometry                                                                              |
| **`id`**         | <code>string \| number</code>                 | A value that uniquely identifies this feature in a https://tools.ietf.org/html/rfc7946#section-3.2. |
| **`properties`** | <code>P</code>                                | Properties associated with this feature.                                                            |


#### Point2D

| Prop    | Type                |
| ------- | ------------------- |
| **`x`** | <code>number</code> |
| **`y`** | <code>number</code> |


#### FeatureCollection

A collection of feature objects.
 https://tools.ietf.org/html/rfc7946#section-3.3

| Prop           | Type                                                                                      | Description                                                  |
| -------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **`type`**     | <code>'<a href="#featurecollection">FeatureCollection</a>'</code>                         | Specifies the type of <a href="#geojson">GeoJSON</a> object. |
| **`features`** | <code><a href="#array">Array</a>&lt;<a href="#feature">Feature</a>&lt;G, P&gt;&gt;</code> |                                                              |


#### MapEvent

| Prop        | Type                |
| ----------- | ------------------- |
| **`mapId`** | <code>string</code> |
| **`data`**  | <code>T</code>      |


#### MapUpdateOptions

| Prop            | Type                                                                        |
| --------------- | --------------------------------------------------------------------------- |
| **`style`**     | <code>string \| <a href="#stylespecification">StyleSpecification</a></code> |
| **`maxBounds`** | <code><a href="#lnglatbounds">LngLatBounds</a></code>                       |
| **`center`**    | <code>LngLat</code>                                                         |
| **`maxZoom`**   | <code>number</code>                                                         |
| **`minZoom`**   | <code>number</code>                                                         |


#### Point

<a href="#point">Point</a> geometry object.
https://tools.ietf.org/html/rfc7946#section-3.1.2

| Prop              | Type                                          | Description                                                  |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------ |
| **`type`**        | <code>'<a href="#point">Point</a>'</code>     | Specifies the type of <a href="#geojson">GeoJSON</a> object. |
| **`coordinates`** | <code><a href="#position">Position</a></code> |                                                              |


#### Position

| Prop            | Type                        |
| --------------- | --------------------------- |
| **`latitude`**  | <code>number</code>         |
| **`longitude`** | <code>number</code>         |
| **`accuracy`**  | <code>number</code>         |
| **`altitude`**  | <code>number \| null</code> |
| **`speed`**     | <code>number \| null</code> |
| **`heading`**   | <code>number \| null</code> |


#### ZoomToOptions

| Prop          | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`zoom`**    | <code>number</code>                                           |
| **`options`** | <code><a href="#animationoptions">AnimationOptions</a></code> |


#### QueryRenderedFeaturesData

| Prop          | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`point`**   | <code><a href="#point">Point</a></code>                                               |
| **`options`** | <code><a href="#queryrenderedfeaturesoptions">QueryRenderedFeaturesOptions</a></code> |


#### Set

| Prop       | Type                |
| ---------- | ------------------- |
| **`size`** | <code>number</code> |

| Method      | Signature                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| **add**     | (value: T) =&gt; this                                                                                          |
| **clear**   | () =&gt; void                                                                                                  |
| **delete**  | (value: T) =&gt; boolean                                                                                       |
| **forEach** | (callbackfn: (value: T, value2: T, set: <a href="#set">Set</a>&lt;T&gt;) =&gt; void, thisArg?: any) =&gt; void |
| **has**     | (value: T) =&gt; boolean                                                                                       |


#### QuerySourceFeatureData

| Prop           | Type                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| **`sourceId`** | <code>string</code>                                                             |
| **`options`**  | <code><a href="#querysourcefeatureoptions">QuerySourceFeatureOptions</a></code> |


#### MapFitBoundsOptions

| Prop          | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`bounds`**  | <code><a href="#lnglatboundslike">LngLatBoundsLike</a></code> |
| **`options`** | <code><a href="#fitboundsoptions">FitBoundsOptions</a></code> |


#### LayerAddOptions

| Prop                | Type                                                              |
| ------------------- | ----------------------------------------------------------------- |
| **`layer`**         | <code><a href="#layerspecification">LayerSpecification</a></code> |
| **`beforeLayerId`** | <code>string</code>                                               |


#### LayerMoveOptions

| Prop                | Type                |
| ------------------- | ------------------- |
| **`layerId`**       | <code>string</code> |
| **`beforeLayerId`** | <code>string</code> |


#### LayerRemoveOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`layerId`** | <code>string</code> |


#### SourceAddOptions

| Prop           | Type                                                                |
| -------------- | ------------------------------------------------------------------- |
| **`sourceId`** | <code>string</code>                                                 |
| **`source`**   | <code><a href="#sourcespecification">SourceSpecification</a></code> |


#### Source

The <a href="#source">`Source`</a> interface must be implemented by each source type, including "core" types (`vector`, `raster`,
`video`, etc.) and all custom, third-party types.

**Event** `data` - Fired with `{dataType: 'source', sourceDataType: 'metadata'}` to indicate that any necessary metadata
has been loaded so that it's okay to call `loadTile`; and with `{dataType: 'source', sourceDataType: 'content'}`
to indicate that the source data has changed, so that any current caches should be flushed.

| Prop                    | Type                                                                            | Description                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **`type`**              | <code>string</code>                                                             |                                                                                                                                   |
| **`id`**                | <code>string</code>                                                             | The id for the source. Must not be used by any existing source.                                                                   |
| **`minzoom`**           | <code>number</code>                                                             | The minimum zoom level for the source.                                                                                            |
| **`maxzoom`**           | <code>number</code>                                                             | The maximum zoom level for the source.                                                                                            |
| **`tileSize`**          | <code>number</code>                                                             | The tile size for the source.                                                                                                     |
| **`attribution`**       | <code>string</code>                                                             | The attribution for the source.                                                                                                   |
| **`roundZoom`**         | <code>boolean</code>                                                            | `true` if zoom levels are rounded to the nearest integer in the source data, `false` if they are floor-ed to the nearest integer. |
| **`isTileClipped`**     | <code>boolean</code>                                                            | `false` if tiles can be drawn outside their boundaries, `true` if they cannot.                                                    |
| **`tileID`**            | <code>CanonicalTileID</code>                                                    |                                                                                                                                   |
| **`reparseOverscaled`** | <code>boolean</code>                                                            | `true` if tiles should be sent back to the worker for each overzoomed zoom level, `false` if not.                                 |
| **`vectorLayerIds`**    | <code><a href="#array">Array</a>&lt;string&gt;</code>                           |                                                                                                                                   |
| **`calculateTileZoom`** | <code><a href="#calculatetilezoomfunction">CalculateTileZoomFunction</a></code> | Optional function to redefine how tiles are loaded at high pitch angles.                                                          |

| Method            | Signature                                | Description                                                                                                               |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **hasTransition** | () =&gt; boolean                         | True if the source has transition, false otherwise.                                                                       |
| **loaded**        | () =&gt; boolean                         | True if the source is loaded, false otherwise.                                                                            |
| **fire**          | (event: Event$1) =&gt; unknown           | An ability to fire an event to all the listeners, see {@link Evented}                                                     |
| **onAdd**         | (map: Map$1) =&gt; void                  | This method is called when the source is added to the map.                                                                |
| **onRemove**      | (map: Map$1) =&gt; void                  | This method is called when the source is removed from the map.                                                            |
| **loadTile**      | (tile: Tile) =&gt; Promise&lt;void&gt;   | This method does the heavy lifting of loading a tile. In most cases it will defer the work to the relevant worker source. |
| **hasTile**       | (tileID: OverscaledTileID) =&gt; boolean | True is the tile is part of the source, false otherwise.                                                                  |
| **abortTile**     | (tile: Tile) =&gt; Promise&lt;void&gt;   | Allows to abort a tile loading.                                                                                           |
| **unloadTile**    | (tile: Tile) =&gt; Promise&lt;void&gt;   | Allows to unload a tile.                                                                                                  |
| **serialize**     | () =&gt; any                             |                                                                                                                           |
| **prepare**       | () =&gt; void                            | Allows to execute a prepare step before the source is used.                                                               |


#### SourceUpdateOptions

| Prop           | Type                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| **`sourceId`** | <code>string</code>                                                                      |
| **`data`**     | <code>string \| <a href="#geojson">GeoJSON</a>&lt;Geometry, GeoJsonProperties&gt;</code> |


#### SourceRemoveOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`sourceId`** | <code>string</code> |


#### PropertySetOptions

| Prop          | Type                                                         |
| ------------- | ------------------------------------------------------------ |
| **`layerId`** | <code>string</code>                                          |
| **`layer`**   | <code><a href="#record">Record</a>&lt;string, any&gt;</code> |
| **`paint`**   | <code><a href="#record">Record</a>&lt;string, any&gt;</code> |


#### PropertyGetOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`layerId`** | <code>string</code> |
| **`name`**    | <code>string</code> |


#### MapMarkerAddOptions

| Prop           | Type                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`position`** | <code>LngLat</code>                                                                                                                 |
| **`options`**  | <code><a href="#mapmarkerimageoptions">MapMarkerImageOptions</a> \| <a href="#mapmarkertypeoptions">MapMarkerTypeOptions</a></code> |


#### MapMarkerImageOptions

| Prop       | Type                 |
| ---------- | -------------------- |
| **`type`** | <code>'image'</code> |
| **`url`**  | <code>string</code>  |


#### MapMarkerTypeOptions

| Prop        | Type                  |
| ----------- | --------------------- |
| **`type`**  | <code>'marker'</code> |
| **`color`** | <code>string</code>   |


#### MapMarkerUpdateOptions

| Prop           | Type                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`markerId`** | <code>string</code>                                                                                                                 |
| **`position`** | <code>LngLat</code>                                                                                                                 |
| **`options`**  | <code><a href="#mapmarkerimageoptions">MapMarkerImageOptions</a> \| <a href="#mapmarkertypeoptions">MapMarkerTypeOptions</a></code> |


#### UserLocationEvent

| Prop              | Type                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------- |
| **`point`**       | <code><a href="#userlocationpointoptions">UserLocationPointOptions</a></code>             |
| **`radius`**      | <code><a href="#userlocationradiusoptions">UserLocationRadiusOptions</a></code>           |
| **`direction`**   | <code><a href="#userlocationdirectionoptions">UserLocationDirectionOptions</a></code>     |
| **`autoRefresh`** | <code><a href="#userlocationautorefreshoptions">UserLocationAutoRefreshOptions</a></code> |
| **`location`**    | <code><a href="#position">Position</a></code>                                             |


#### UserLocationPointOptions

| Prop         | Type                 |
| ------------ | -------------------- |
| **`enable`** | <code>boolean</code> |
| **`scale`**  | <code>number</code>  |
| **`color`**  | <code>string</code>  |
| **`image`**  | <code>string</code>  |
| **`index`**  | <code>number</code>  |


#### UserLocationRadiusOptions

| Prop         | Type                 |
| ------------ | -------------------- |
| **`enable`** | <code>boolean</code> |
| **`color`**  | <code>string</code>  |
| **`image`**  | <code>string</code>  |
| **`index`**  | <code>number</code>  |


#### UserLocationDirectionOptions

| Prop         | Type                 |
| ------------ | -------------------- |
| **`enable`** | <code>boolean</code> |
| **`scale`**  | <code>number</code>  |
| **`color`**  | <code>string</code>  |
| **`image`**  | <code>string</code>  |
| **`index`**  | <code>number</code>  |


#### UserLocationAutoRefreshOptions

| Prop                     | Type                 |
| ------------------------ | -------------------- |
| **`enable`**             | <code>boolean</code> |
| **`enableHighAccuracy`** | <code>boolean</code> |
| **`timeout`**            | <code>number</code>  |
| **`maximumAge`**         | <code>number</code>  |


#### MapBoundsOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`width`**  | <code>number</code> |
| **`height`** | <code>number</code> |
| **`x`**      | <code>number</code> |
| **`y`**      | <code>number</code> |


### Type Aliases


#### StyleSpecification

<code>{ 	"version": 8; 	"name"?: string; 	"metadata"?: unknown; 	"center"?: <a href="#array">Array</a>&lt;number&gt;; 	"centerAltitude"?: number; 	"zoom"?: number; 	"bearing"?: number; 	"pitch"?: number; 	"roll"?: number; 	"light"?: <a href="#lightspecification">LightSpecification</a>; 	"sky"?: <a href="#skyspecification">SkySpecification</a>; 	"projection"?: <a href="#projectionspecification">ProjectionSpecification</a>; 	"terrain"?: <a href="#terrainspecification">TerrainSpecification</a>; 	"sources": { 		[_: string]: <a href="#sourcespecification">SourceSpecification</a>; 	}; 	"sprite"?: <a href="#spritespecification">SpriteSpecification</a>; 	"glyphs"?: string; 	"transition"?: <a href="#transitionspecification">TransitionSpecification</a>; 	"layers": <a href="#array">Array</a>&lt;<a href="#layerspecification">LayerSpecification</a>&gt;; }</code>


#### LightSpecification

<code>{ 	"anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 	"position"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 		number, 		number, 		number 	]&gt;; 	"color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 	"intensity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; }</code>


#### PropertyValueSpecification

<code>T | <a href="#camerafunctionspecification">CameraFunctionSpecification</a>&lt;T&gt; | <a href="#expressionspecification">ExpressionSpecification</a></code>


#### CameraFunctionSpecification

<code>{ 	type: "exponential"; 	stops: <a href="#array">Array</a>&lt;[ 		number, 		T 	]&gt;; } | { 	type: "interval"; 	stops: <a href="#array">Array</a>&lt;[ 		number, 		T 	]&gt;; }</code>


#### ExpressionSpecification

<code>[ 	"array", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"array", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"array", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"boolean", 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[], 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | <a href="#collatorexpressionspecification">CollatorExpressionSpecification</a> | [ 	"format", 	...(string | [ 		"image", 		ExpressionSpecification 	] | <a href="#expressionspecification">ExpressionSpecification</a> | { 		"font-scale"?: number | <a href="#expressionspecification">ExpressionSpecification</a>; 		"text-font"?: string[] | <a href="#expressionspecification">ExpressionSpecification</a>; 		"text-color"?: <a href="#colorspecification">ColorSpecification</a> | <a href="#expressionspecification">ExpressionSpecification</a>; 	})[] ] | [ 	"image", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"literal", 	unknown ] | [ 	"number", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"number-format", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	{ 		"locale"?: string | <a href="#expressionspecification">ExpressionSpecification</a>; 		"currency"?: string | <a href="#expressionspecification">ExpressionSpecification</a>; 		"min-fraction-digits"?: number | <a href="#expressionspecification">ExpressionSpecification</a>; 		"max-fraction-digits"?: number | <a href="#expressionspecification">ExpressionSpecification</a>; 	} ] | [ 	"object", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"string", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"to-boolean", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"to-color", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"to-number", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(unknown | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"to-string", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"accumulated" ] | [ 	"feature-state", 	string ] | [ 	"geometry-type" ] | [ 	"id" ] | [ 	"line-progress" ] | [ 	"properties" ] | [ 	"at", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionSpecification ] | [ 	"get", 	string | <a href="#expressionspecification">ExpressionSpecification</a>, 	(<a href="#record">Record</a>&lt;string, unknown&gt; | <a href="#expressionspecification">ExpressionSpecification</a>)? ] | [ 	"has", 	string | <a href="#expressionspecification">ExpressionSpecification</a>, 	(<a href="#record">Record</a>&lt;string, unknown&gt; | <a href="#expressionspecification">ExpressionSpecification</a>)? ] | [ 	"in", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"index-of", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"length", 	string | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"slice", 	string | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	(number | <a href="#expressionspecification">ExpressionSpecification</a>)? ] | [ 	"!", 	boolean | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"!=", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"&lt;", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"&lt;=", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"==", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"&gt;", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"&gt;=", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	CollatorExpressionSpecification? ] | [ 	"all", 	...(boolean | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"any", 	...(boolean | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"case", 	boolean | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(boolean | <a href="#expressioninputtype">ExpressionInputType</a> | <a href="#expressionspecification">ExpressionSpecification</a>)[], 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"coalesce", 	...(<a href="#expressioninputtype">ExpressionInputType</a> | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"match", 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | ExpressionInputType[], 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(<a href="#expressioninputtype">ExpressionInputType</a> | ExpressionInputType[] | <a href="#expressionspecification">ExpressionSpecification</a>)[], 	// repeated as above 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"within", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"distance", 	unknown | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"interpolate", 	InterpolationSpecification, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | number[] | <a href="#colorspecification">ColorSpecification</a> | <a href="#expressionspecification">ExpressionSpecification</a> | <a href="#projectiondefinitionspecification">ProjectionDefinitionSpecification</a>)[] ] | [ 	"interpolate-hcl", 	InterpolationSpecification, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#colorspecification">ColorSpecification</a>)[] ] | [ 	"interpolate-lab", 	InterpolationSpecification, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#colorspecification">ColorSpecification</a>)[] ] | [ 	"step", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#expressioninputtype">ExpressionInputType</a> | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"let", 	string, 	ExpressionInputType | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(string | <a href="#expressioninputtype">ExpressionInputType</a> | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"var", 	string ] | [ 	"concat", 	...(<a href="#expressioninputtype">ExpressionInputType</a> | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"downcase", 	string | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"is-supported-script", 	string | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"resolved-locale", 	CollatorExpressionSpecification ] | [ 	"upcase", 	string | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"rgb", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"rgba", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"to-rgba", 	ColorSpecification | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"-", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	(number | <a href="#expressionspecification">ExpressionSpecification</a>)? ] | [ 	"*", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"/", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"%", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"^", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"+", 	...(number | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"abs", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"acos", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"asin", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"atan", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"ceil", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"cos", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"distance", 	Record&lt;string, unknown&gt; | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"<a href="#expressionspecification">ExpressionSpecification</a>" ] | [ 	"floor", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"ln", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"ln2" ] | [ 	"log10", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"log2", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"max", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"min", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	...(number | <a href="#expressionspecification">ExpressionSpecification</a>)[] ] | [ 	"pi" ] | [ 	"round", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"sin", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"sqrt", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"tan", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"zoom" ] | [ 	"heatmap-density" ]</code>


#### ExpressionInputType

<code>string | number | boolean</code>


#### CollatorExpressionSpecification

<code>[ 	"collator", 	{ 		"case-sensitive"?: boolean | <a href="#expressionspecification">ExpressionSpecification</a>; 		"diacritic-sensitive"?: boolean | <a href="#expressionspecification">ExpressionSpecification</a>; 		locale?: string | <a href="#expressionspecification">ExpressionSpecification</a>; 	} ]</code>


#### ColorSpecification

<code>string</code>


#### Record

Construct a type with a set of properties K of type T

<code>{
 [P in K]: T;
 }</code>


#### InterpolationSpecification

<code>[ 	"linear" ] | [ 	"exponential", 	number | <a href="#expressionspecification">ExpressionSpecification</a> ] | [ 	"cubic-bezier", 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a>, 	number | <a href="#expressionspecification">ExpressionSpecification</a> ]</code>


#### ProjectionDefinitionSpecification

<code>string | <a href="#projectiondefinitiont">ProjectionDefinitionT</a> | <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#projectiondefinitiont">ProjectionDefinitionT</a>&gt;</code>


#### ProjectionDefinitionT

<code>[ 	string, 	string, 	number ]</code>


#### SkySpecification

<code>{ 	"sky-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 	"horizon-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 	"fog-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 	"fog-ground-blend"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	"horizon-fog-blend"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	"sky-horizon-blend"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	"atmosphere-blend"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; }</code>


#### ProjectionSpecification

<code>{ 	"type"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#projectiondefinitionspecification">ProjectionDefinitionSpecification</a>&gt;; }</code>


#### TerrainSpecification

<code>{ 	"source": string; 	"exaggeration"?: number; }</code>


#### SourceSpecification

<code><a href="#vectorsourcespecification">VectorSourceSpecification</a> | <a href="#rastersourcespecification">RasterSourceSpecification</a> | <a href="#rasterdemsourcespecification">RasterDEMSourceSpecification</a> | <a href="#geojsonsourcespecification">GeoJSONSourceSpecification</a> | <a href="#videosourcespecification">VideoSourceSpecification</a> | <a href="#imagesourcespecification">ImageSourceSpecification</a></code>


#### VectorSourceSpecification

<code>{ 	"type": "vector"; 	"url"?: string; 	"tiles"?: <a href="#array">Array</a>&lt;string&gt;; 	"bounds"?: [ 		number, 		number, 		number, 		number 	]; 	"scheme"?: "xyz" | "tms"; 	"minzoom"?: number; 	"maxzoom"?: number; 	"attribution"?: string; 	"promoteId"?: <a href="#promoteidspecification">PromoteIdSpecification</a>; 	"volatile"?: boolean; }</code>


#### PromoteIdSpecification

<code>{ 	[_: string]: string; } | string</code>


#### RasterSourceSpecification

<code>{ 	"type": "raster"; 	"url"?: string; 	"tiles"?: <a href="#array">Array</a>&lt;string&gt;; 	"bounds"?: [ 		number, 		number, 		number, 		number 	]; 	"minzoom"?: number; 	"maxzoom"?: number; 	"tileSize"?: number; 	"scheme"?: "xyz" | "tms"; 	"attribution"?: string; 	"volatile"?: boolean; }</code>


#### RasterDEMSourceSpecification

<code>{ 	"type": "raster-dem"; 	"url"?: string; 	"tiles"?: <a href="#array">Array</a>&lt;string&gt;; 	"bounds"?: [ 		number, 		number, 		number, 		number 	]; 	"minzoom"?: number; 	"maxzoom"?: number; 	"tileSize"?: number; 	"attribution"?: string; 	"encoding"?: "terrarium" | "mapbox" | "custom"; 	"redFactor"?: number; 	"blueFactor"?: number; 	"greenFactor"?: number; 	"baseShift"?: number; 	"volatile"?: boolean; }</code>


#### GeoJSONSourceSpecification

<code>{ 	"type": "geojson"; 	"data": <a href="#geojson">GeoJSON</a>.<a href="#geojson">GeoJSON</a> | string; 	"maxzoom"?: number; 	"attribution"?: string; 	"buffer"?: number; 	"filter"?: unknown; 	"tolerance"?: number; 	"cluster"?: boolean; 	"clusterRadius"?: number; 	"clusterMaxZoom"?: number; 	"clusterMinPoints"?: number; 	"clusterProperties"?: unknown; 	"lineMetrics"?: boolean; 	"generateId"?: boolean; 	"promoteId"?: <a href="#promoteidspecification">PromoteIdSpecification</a>; }</code>


#### GeoJSON

Union of <a href="#geojson">GeoJSON</a> objects.

<code>G | <a href="#feature">Feature</a>&lt;G, P&gt; | <a href="#featurecollection">FeatureCollection</a>&lt;G, P&gt;</code>


#### Feature

<code>{ 	readonly type: 0 | 1 | 2 | 3 | "Unknown" | "<a href="#point">Point</a>" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon"; 	readonly id?: any; 	readonly properties: { 		[_: string]: any; 	}; 	readonly patterns?: { 		[_: string]: { 			"min": string; 			"mid": string; 			"max": string; 		}; 	}; 	readonly geometry?: <a href="#array">Array</a>&lt;<a href="#array">Array</a>&lt;<a href="#point2d">Point2D</a>&gt;&gt;; }</code>


#### Point2D

<code>{ 	x: number; 	y: number; }</code>


#### VideoSourceSpecification

<code>{ 	"type": "video"; 	"urls": <a href="#array">Array</a>&lt;string&gt;; 	"coordinates": [ 		[ 			number, 			number 		], 		[ 			number, 			number 		], 		[ 			number, 			number 		], 		[ 			number, 			number 		] 	]; }</code>


#### ImageSourceSpecification

<code>{ 	"type": "image"; 	"url": string; 	"coordinates": [ 		[ 			number, 			number 		], 		[ 			number, 			number 		], 		[ 			number, 			number 		], 		[ 			number, 			number 		] 	]; }</code>


#### SpriteSpecification

<code>string | { 	id: string; 	url: string; }[]</code>


#### TransitionSpecification

<code>{ 	duration?: number; 	delay?: number; }</code>


#### LayerSpecification

<code><a href="#filllayerspecification">FillLayerSpecification</a> | <a href="#linelayerspecification">LineLayerSpecification</a> | <a href="#symbollayerspecification">SymbolLayerSpecification</a> | <a href="#circlelayerspecification">CircleLayerSpecification</a> | <a href="#heatmaplayerspecification">HeatmapLayerSpecification</a> | <a href="#fillextrusionlayerspecification">FillExtrusionLayerSpecification</a> | <a href="#rasterlayerspecification">RasterLayerSpecification</a> | <a href="#hillshadelayerspecification">HillshadeLayerSpecification</a> | <a href="#backgroundlayerspecification">BackgroundLayerSpecification</a></code>


#### FillLayerSpecification

<code>{ 	"id": string; 	"type": "fill"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"fill-sort-key"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"fill-antialias"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"fill-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"fill-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"fill-outline-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"fill-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"fill-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"fill-pattern"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#resolvedimagespecification">ResolvedImageSpecification</a>&gt;; 	}; }</code>


#### FilterSpecification

<code><a href="#expressionfilterspecification">ExpressionFilterSpecification</a> | <a href="#legacyfilterspecification">LegacyFilterSpecification</a></code>


#### ExpressionFilterSpecification

<code>boolean | <a href="#expressionspecification">ExpressionSpecification</a></code>


#### LegacyFilterSpecification

<code>[ 	"has", 	string ] | [ 	"!has", 	string ] | [ 	"==", 	string, 	string | number | boolean ] | [ 	"!=", 	string, 	string | number | boolean ] | [ 	"&gt;", 	string, 	string | number | boolean ] | [ 	"&gt;=", 	string, 	string | number | boolean ] | [ 	"&lt;", 	string, 	string | number | boolean ] | [ 	"&lt;=", 	string, 	string | number | boolean ] | [ 	"in", 	string, 	...(string | number | boolean)[] ] | [ 	"!in", 	string, 	...(string | number | boolean)[] ] | [ 	"all", 	...LegacyFilterSpecification[] ] | [ 	"any", 	...LegacyFilterSpecification[] ] | [ 	"none", 	...LegacyFilterSpecification[] ]</code>


#### DataDrivenPropertyValueSpecification

<code>T | <a href="#camerafunctionspecification">CameraFunctionSpecification</a>&lt;T&gt; | <a href="#sourcefunctionspecification">SourceFunctionSpecification</a>&lt;T&gt; | <a href="#compositefunctionspecification">CompositeFunctionSpecification</a>&lt;T&gt; | <a href="#expressionspecification">ExpressionSpecification</a></code>


#### SourceFunctionSpecification

<code>{ 	type: "exponential"; 	stops: <a href="#array">Array</a>&lt;[ 		number, 		T 	]&gt;; 	property: string; 	default?: T; } | { 	type: "interval"; 	stops: <a href="#array">Array</a>&lt;[ 		number, 		T 	]&gt;; 	property: string; 	default?: T; } | { 	type: "categorical"; 	stops: <a href="#array">Array</a>&lt;[ 		string | number | boolean, 		T 	]&gt;; 	property: string; 	default?: T; } | { 	type: "identity"; 	property: string; 	default?: T; }</code>


#### CompositeFunctionSpecification

<code>{ 	type: "exponential"; 	stops: <a href="#array">Array</a>&lt;[ 		{ 			zoom: number; 			value: number; 		}, 		T 	]&gt;; 	property: string; 	default?: T; } | { 	type: "interval"; 	stops: <a href="#array">Array</a>&lt;[ 		{ 			zoom: number; 			value: number; 		}, 		T 	]&gt;; 	property: string; 	default?: T; } | { 	type: "categorical"; 	stops: <a href="#array">Array</a>&lt;[ 		{ 			zoom: number; 			value: string | number | boolean; 		}, 		T 	]&gt;; 	property: string; 	default?: T; }</code>


#### ResolvedImageSpecification

<code>string</code>


#### LineLayerSpecification

<code>{ 	"id": string; 	"type": "line"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"line-cap"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"butt" | "round" | "square"&gt;; 		"line-join"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;"bevel" | "round" | "miter"&gt;; 		"line-miter-limit"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"line-round-limit"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"line-sort-key"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"line-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"line-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"line-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"line-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"line-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"line-gap-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"line-offset"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"line-blur"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"line-dasharray"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#array">Array</a>&lt;number&gt;&gt;; 		"line-pattern"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#resolvedimagespecification">ResolvedImageSpecification</a>&gt;; 		"line-gradient"?: <a href="#expressionspecification">ExpressionSpecification</a>; 	}; }</code>


#### SymbolLayerSpecification

<code>{ 	"id": string; 	"type": "symbol"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"symbol-placement"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"point" | "line" | "line-center"&gt;; 		"symbol-spacing"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"symbol-avoid-edges"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"symbol-sort-key"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"symbol-z-order"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"auto" | "viewport-y" | "source"&gt;; 		"icon-allow-overlap"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"icon-overlap"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"never" | "always" | "cooperative"&gt;; 		"icon-ignore-placement"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"icon-optional"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"icon-rotation-alignment"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport" | "auto"&gt;; 		"icon-size"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"icon-text-fit"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"none" | "width" | "height" | "both"&gt;; 		"icon-text-fit-padding"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number, 			number, 			number 		]&gt;; 		"icon-image"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#resolvedimagespecification">ResolvedImageSpecification</a>&gt;; 		"icon-rotate"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"icon-padding"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#paddingspecification">PaddingSpecification</a>&gt;; 		"icon-keep-upright"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"icon-offset"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"icon-anchor"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;"center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"&gt;; 		"icon-pitch-alignment"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport" | "auto"&gt;; 		"text-pitch-alignment"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport" | "auto"&gt;; 		"text-rotation-alignment"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport" | "viewport-glyph" | "auto"&gt;; 		"text-field"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#formattedspecification">FormattedSpecification</a>&gt;; 		"text-font"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#array">Array</a>&lt;string&gt;&gt;; 		"text-size"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-max-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-line-height"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"text-letter-spacing"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-justify"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;"auto" | "left" | "center" | "right"&gt;; 		"text-radial-offset"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-variable-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#array">Array</a>&lt;"center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"&gt;&gt;; 		"text-variable-anchor-offset"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#variableanchoroffsetcollectionspecification">VariableAnchorOffsetCollectionSpecification</a>&gt;; 		"text-anchor"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;"center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"&gt;; 		"text-max-angle"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"text-writing-mode"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#array">Array</a>&lt;"horizontal" | "vertical"&gt;&gt;; 		"text-rotate"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-padding"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"text-keep-upright"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"text-transform"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;"none" | "uppercase" | "lowercase"&gt;; 		"text-offset"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"text-allow-overlap"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"text-overlap"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"never" | "always" | "cooperative"&gt;; 		"text-ignore-placement"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"text-optional"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"icon-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"icon-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"icon-halo-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"icon-halo-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"icon-halo-blur"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"icon-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"icon-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"text-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"text-halo-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"text-halo-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-halo-blur"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"text-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"text-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 	}; }</code>


#### PaddingSpecification

<code>number | number[]</code>


#### FormattedSpecification

<code>string</code>


#### VariableAnchorOffsetCollectionSpecification

<code><a href="#array">Array</a>&lt;string | [ 	number, 	number ]&gt;</code>


#### CircleLayerSpecification

<code>{ 	"id": string; 	"type": "circle"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"circle-sort-key"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"circle-radius"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"circle-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"circle-blur"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"circle-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"circle-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"circle-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"circle-pitch-scale"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"circle-pitch-alignment"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"circle-stroke-width"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"circle-stroke-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"circle-stroke-opacity"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 	}; }</code>


#### HeatmapLayerSpecification

<code>{ 	"id": string; 	"type": "heatmap"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"heatmap-radius"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"heatmap-weight"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"heatmap-intensity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"heatmap-color"?: <a href="#expressionspecification">ExpressionSpecification</a>; 		"heatmap-opacity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	}; }</code>


#### FillExtrusionLayerSpecification

<code>{ 	"id": string; 	"type": "fill-extrusion"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"fill-extrusion-opacity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"fill-extrusion-color"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"fill-extrusion-translate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;[ 			number, 			number 		]&gt;; 		"fill-extrusion-translate-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"fill-extrusion-pattern"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;<a href="#resolvedimagespecification">ResolvedImageSpecification</a>&gt;; 		"fill-extrusion-height"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"fill-extrusion-base"?: <a href="#datadrivenpropertyvaluespecification">DataDrivenPropertyValueSpecification</a>&lt;number&gt;; 		"fill-extrusion-vertical-gradient"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;boolean&gt;; 	}; }</code>


#### RasterLayerSpecification

<code>{ 	"id": string; 	"type": "raster"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"raster-opacity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-hue-rotate"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-brightness-min"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-brightness-max"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-saturation"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-contrast"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"raster-resampling"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"linear" | "nearest"&gt;; 		"raster-fade-duration"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	}; }</code>


#### HillshadeLayerSpecification

<code>{ 	"id": string; 	"type": "hillshade"; 	"metadata"?: unknown; 	"source": string; 	"source-layer"?: string; 	"minzoom"?: number; 	"maxzoom"?: number; 	"filter"?: <a href="#filterspecification">FilterSpecification</a>; 	"layout"?: { 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"hillshade-illumination-direction"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"hillshade-illumination-anchor"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;"map" | "viewport"&gt;; 		"hillshade-exaggeration"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 		"hillshade-shadow-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"hillshade-highlight-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"hillshade-accent-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 	}; }</code>


#### BackgroundLayerSpecification

<code>{ 	"id": string; 	"type": "background"; 	"metadata"?: unknown; 	"minzoom"?: number; 	"maxzoom"?: number; 	"layout"?: { 		"visibility"?: "visible" | "none"; 	}; 	"paint"?: { 		"background-color"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#colorspecification">ColorSpecification</a>&gt;; 		"background-pattern"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;<a href="#resolvedimagespecification">ResolvedImageSpecification</a>&gt;; 		"background-opacity"?: <a href="#propertyvaluespecification">PropertyValueSpecification</a>&lt;number&gt;; 	}; }</code>


#### FlyToOptions

The {@link Map#flyTo} options object

<code><a href="#animationoptions">AnimationOptions</a> & <a href="#cameraoptions">CameraOptions</a> & { 	/** 	 * The zooming "curve" that will occur along the 	 * flight path. A high value maximizes zooming for an exaggerated animation, while a low 	 * value minimizes zooming for an effect closer to {@link Map#easeTo}. 1.42 is the average 	 * value selected by participants in the user study discussed in 	 * [van Wijk (2003)](https://www.win.tue.nl/~vanwijk/zoompan.pdf). A value of 	 * `Math.pow(6, 0.25)` would be equivalent to the root mean squared average velocity. A 	 * value of 1 would produce a circular motion. 	 * @defaultValue 1.42 	 */ 	curve?: number; 	/** 	 * The zero-based zoom level at the peak of the flight path. If 	 * `options.curve` is specified, this option is ignored. 	 */ 	minZoom?: number; 	/** 	 * The average speed of the animation defined in relation to 	 * `options.curve`. A speed of 1.2 means that the map appears to move along the flight path 	 * by 1.2 times `options.curve` screenfuls every second. A _screenful_ is the map's visible span. 	 * It does not correspond to a fixed physical distance, but varies by zoom level. 	 * @defaultValue 1.2 	 */ 	speed?: number; 	/** 	 * The average speed of the animation measured in screenfuls 	 * per second, assuming a linear timing curve. If `options.speed` is specified, this option is ignored. 	 */ 	screenSpeed?: number; 	/** 	 * The animation's maximum duration, measured in milliseconds. 	 * If duration exceeds maximum duration, it resets to 0. 	 */ 	maxDuration?: number; 	/** 	 * The amount of padding in pixels to add to the given bounds. 	 */ 	padding?: number | <a href="#paddingoptions">PaddingOptions</a>; }</code>


#### AnimationOptions

Options common to map movement methods that involve animation, such as {@link Map#panBy} and
{@link Map#easeTo}, controlling the duration and easing function of the animation. All properties
are optional.

<code>{ 	/** 	 * The animation's duration, measured in milliseconds. 	 */ 	duration?: number; 	/** 	 * A function taking a time in the range 0..1 and returning a number where 0 is 	 * the initial state and 1 is the final state. 	 */ 	easing?: (_: number) =&gt; number; 	/** 	 * of the target center relative to real map container center at the end of animation. 	 */ 	offset?: <a href="#pointlike">PointLike</a>; 	/** 	 * If `false`, no animation will occur. 	 */ 	animate?: boolean; 	/** 	 * If `true`, then the animation is considered essential and will not be affected by 	 * [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/\@media/prefers-reduced-motion). 	 */ 	essential?: boolean; 	/** 	 * Default false. Needed in 3D maps to let the camera stay in a constant 	 * height based on sea-level. After the animation finished the zoom-level will be recalculated in respect of 	 * the distance from the camera to the center-coordinate-altitude. 	 */ 	freezeElevation?: boolean; }</code>


#### PointLike

A [Point](https://github.com/mapbox/point-geometry) or an array of two numbers representing `x` and `y` screen coordinates in pixels.

<code><a href="#point">Point</a> | [ 	number, 	number ]</code>


#### Position

A <a href="#position">Position</a> is an array of coordinates.
https://tools.ietf.org/html/rfc7946#section-3.1.1
Array should contain between two and three elements.
The previous <a href="#geojson">GeoJSON</a> specification allowed more elements (e.g., which could be used to represent M values),
but the current specification only allows X, Y, and (optionally) Z to be defined.

Note: the type will not be narrowed down to `[number, number] | [number, number, number]` due to
marginal benefits and the large impact of breaking change.

See previous discussions on the type narrowing:
- {@link https://github.com/DefinitelyTyped/DefinitelyTyped/pull/21590|Nov 2017}
- {@link https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/67773|Dec 2023}
- {@link https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/71441| Dec 2024}

One can use a
{@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates|user-defined type guard that returns a type predicate}
to determine if a position is a 2D or 3D position.

<code>number[]</code>


#### CameraOptions

Options common to {@link Map#jumpTo}, {@link Map#easeTo}, and {@link Map#flyTo}, controlling the desired location,
zoom, bearing, pitch, and roll of the camera. All properties are optional, and when a property is omitted, the current
camera value for that property will remain unchanged.

<code><a href="#centerzoombearing">CenterZoomBearing</a> & { 	/** 	 * The desired pitch in degrees. The pitch is the angle towards the horizon 	 * measured in degrees with a range between 0 and 60 degrees. For example, pitch: 0 provides the appearance 	 * of looking straight down at the map, while pitch: 60 tilts the user's perspective towards the horizon. 	 * Increasing the pitch value is often used to display 3D objects. 	 */ 	pitch?: number; 	/** 	 * The desired roll in degrees. The roll is the angle about the camera boresight. 	 */ 	roll?: number; 	/** 	 * The elevation of the center point in meters above sea level. 	 */ 	elevation?: number; }</code>


#### CenterZoomBearing

Holds center, zoom and bearing properties

<code>{ 	/** 	 * The desired center. 	 */ 	center?: <a href="#lnglatlike">LngLatLike</a>; 	/** 	 * The desired mercator zoom level. 	 */ 	zoom?: number; 	/** 	 * The desired bearing in degrees. The bearing is the compass direction that 	 * is "up". For example, `bearing: 90` orients the map so that east is up. 	 */ 	bearing?: number; }</code>


#### LngLatLike

A {@link LngLat} object, an array of two numbers representing longitude and latitude,
or an object with `lng` and `lat` or `lon` and `lat` properties.

<code>LngLat | { 	lng: number; 	lat: number; } | { 	lon: number; 	lat: number; } | [ 	number, 	number ]</code>


#### PaddingOptions

Options for setting padding on calls to methods such as {@link Map#fitBounds}, {@link Map#fitScreenCoordinates}, and {@link Map#setPadding}. Adjust these options to set the amount of padding in pixels added to the edges of the canvas. <a href="#set">Set</a> a uniform padding on all edges or individual values for each edge. All properties of this object must be
non-negative integers.

<code><a href="#requireatleastone">RequireAtLeastOne</a>&lt;{ 	/** 	 * Padding in pixels from the top of the map canvas. 	 */ 	top: number; 	/** 	 * Padding in pixels from the bottom of the map canvas. 	 */ 	bottom: number; 	/** 	 * Padding in pixels from the left of the map canvas. 	 */ 	right: number; 	/** 	 * Padding in pixels from the right of the map canvas. 	 */ 	left: number; }&gt;</code>


#### RequireAtLeastOne

A helper to allow require of at least one property

<code>{ 	[K in keyof T]-?: <a href="#required">Required</a>&lt;<a href="#pick">Pick</a>&lt;T, K&gt;&gt; & <a href="#partial">Partial</a>&lt;<a href="#pick">Pick</a>&lt;T, <a href="#exclude">Exclude</a>&lt;keyof T, K&gt;&gt;&gt;; }[keyof T]</code>


#### Required

Make all properties in T required

<code>{
 [P in keyof T]-?: T[P];
 }</code>


#### Pick

From T, pick a set of properties whose keys are in the union K

<code>{
 [P in K]: T[P];
 }</code>


#### Partial

Make all properties in T optional

<code>{
 [P in keyof T]?: T[P];
 }</code>


#### Exclude

<a href="#exclude">Exclude</a> from T those types that are assignable to U

<code>T extends U ? never : T</code>


#### EaseToOptions

The {@link Map#easeTo} options object

<code><a href="#animationoptions">AnimationOptions</a> & <a href="#cameraoptions">CameraOptions</a> & { 	delayEndEvents?: number; 	padding?: number | <a href="#paddingoptions">PaddingOptions</a>; 	/** 	 * If `zoom` is specified, `around` determines the point around which the zoom is centered. 	 */ 	around?: <a href="#lnglatlike">LngLatLike</a>; 	easeId?: string; 	noMoveStart?: boolean; }</code>


#### MapGeoJSONFeature

An extended geojson feature used by the events to return data to the listener

<code>GeoJSONFeature & { 	layer: <a href="#distributiveomit">DistributiveOmit</a>&lt;<a href="#layerspecification">LayerSpecification</a>, "source"&gt; & { 		source: string; 	}; 	source: string; 	sourceLayer?: string; 	state: { 		[key: string]: any; 	}; }</code>


#### DistributiveOmit

A helper for type to omit a property from a type

<code>T extends unknown ? <a href="#omit">Omit</a>&lt;T, K&gt; : never</code>


#### Omit

Construct a type with the properties of T except for those in type K.

<code><a href="#pick">Pick</a>&lt;T, <a href="#exclude">Exclude</a>&lt;keyof T, K&gt;&gt;</code>


#### QueryRenderedFeaturesOptions

Options to pass to query the map for the rendered features

<code>{ 	/** 	 * An array or set of [style layer IDs](https://maplibre.org/maplibre-style-spec/#layer-id) for the query to inspect. 	 * Only features within these layers will be returned. If this parameter is undefined, all layers will be checked. 	 */ 	layers?: <a href="#array">Array</a>&lt;string&gt; | <a href="#set">Set</a>&lt;string&gt;; 	/** 	 * A [filter](https://maplibre.org/maplibre-style-spec/layers/#filter) to limit query results. 	 */ 	filter?: <a href="#filterspecification">FilterSpecification</a>; 	/** 	 * An array of string representing the available images 	 */ 	availableImages?: <a href="#array">Array</a>&lt;string&gt;; 	/** 	 * Whether to check if the [options.filter] conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function. 	 */ 	validate?: boolean; }</code>


#### QuerySourceFeatureOptions

The options object related to the {@link Map#querySourceFeatures} method

<code>{ 	/** 	 * The name of the source layer to query. *For vector tile sources, this parameter is required.* For <a href="#geojson">GeoJSON</a> sources, it is ignored. 	 */ 	sourceLayer?: string; 	/** 	 * A [filter](https://maplibre.org/maplibre-style-spec/layers/#filter) 	 * to limit query results. 	 */ 	filter?: <a href="#filterspecification">FilterSpecification</a>; 	/** 	 * Whether to check if the [parameters.filter] conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function. 	 * @defaultValue true 	 */ 	validate?: boolean; }</code>


#### LngLatBoundsLike

A {@link <a href="#lnglatbounds">LngLatBounds</a>} object, an array of {@link <a href="#lnglatlike">LngLatLike</a>} objects in [sw, ne] order,
or an array of numbers in [west, south, east, north] order.

<code><a href="#lnglatbounds">LngLatBounds</a> | [ 	LngLatLike, 	LngLatLike ] | [ 	number, 	number, 	number, 	number ]</code>


#### FitBoundsOptions

Options for {@link Map#fitBounds} method

<code><a href="#flytooptions">FlyToOptions</a> & { 	/** 	 * If `true`, the map transitions using {@link Map#easeTo}. If `false`, the map transitions using {@link Map#flyTo}. 	 * See those functions and {@link <a href="#animationoptions">AnimationOptions</a>} for information about options available. 	 * @defaultValue false 	 */ 	linear?: boolean; 	/** 	 * The center of the given bounds relative to the map's center, measured in pixels. 	 * @defaultValue [0, 0] 	 */ 	offset?: <a href="#pointlike">PointLike</a>; 	/** 	 * The maximum zoom level to allow when the map view transitions to the specified bounds. 	 */ 	maxZoom?: number; }</code>


#### CalculateTileZoomFunction

Function to define how tiles are loaded at high pitch angles

<code>(requestedCenterZoom: number, distanceToTile2D: number, distanceToTileZ: number, distanceToCenter3D: number, cameraVerticalFOV: number): number</code>

</docgen-api>
