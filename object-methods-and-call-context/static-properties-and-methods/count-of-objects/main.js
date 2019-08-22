function Article() {
    this.created = new Date();

    Article.count++; // увеличиваем счетчик при каждом вызове

    Article.last = this.created; // запоминаем дату

}
  
  Article.count = 0; // начальное значение

  Article.showStats = function() {
    alert( "Всего: " + Article.count + ", Последняя: " + Article.last );
  };

  new Article();
  new Article();
  
  Article.showStats(); // Всего: 2, Последняя: (дата)
  
  new Article();
  
  Article.showStats(); // Всего: 3, Последняя: (дата)