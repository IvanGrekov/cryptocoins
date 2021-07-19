# cryptocoins-ivan-grekov

Трекер криптовалют.


a) одна страница.
b) при открытии приложения получить список с апи, отобразить его.
c) Вид элемента: икнока / имя / цена
d) список должен быть FlatList с отображением по 10 элементов, при скролле подгружаются еще 10 элементов и прибавляются к текущим. 

API: https://www.coingecko.com/en
пример запроса для получения списка:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false