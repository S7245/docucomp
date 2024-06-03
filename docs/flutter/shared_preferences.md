# shared_preferences

```dart
class Main extends StatefulWidget {
  const Main({super.key});

  @override
  State<Main> createState() => _MainState();
}

class _MainState extends State<Main> {
  final Future<SharedPreferences> _prefs = SharedPreferences.getInstance();

  Future<void> _incrementCounter() async {
    final SharedPreferences prefs = await _prefs;
    prefs.setInt('AUTH', 0);
    prefs.getInt('AUTH');
  }
}
```