# TODO: Complete handleSelectedCategory Function

- [ ] Add 'SnacksItems: undefined;' to RootStackParamList in foodee/src/routes/types.ts
- [ ] Update handleSelectedCategory in foodee/src/screens/Dashboard.tsx:
  - Change if(item.name === '000') to if(item.id === '000')
  - Add comment // Navigate to SnacksItems for special categories
  - Add else if(item.id === '00') { navigation.navigate("SnacksItems"); }
- [ ] Followup: Ensure the SnacksItems screen exists or create it if needed
- [ ] Followup: Test navigation in the app
