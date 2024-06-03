# Error Dialog

```text
Invalid use of a private type in a public API.
Try making the private type public, or making the API that uses the private type also be private.
```

```dart
class Page1 extends StatefulWidget {
  const Page1({super.key});

  @override
  _Page1State createState() => _Page1State();
}
//改为
class Page1 extends StatefulWidget {
  const Page1({super.key});

  @override
  State<Page1> createState() => _Page1State();
}
```


```
ElevatedButton(onPressed: () => context.pop(), child: Text('POP'))

Invalid constant value.dart(invalid_constant)
```