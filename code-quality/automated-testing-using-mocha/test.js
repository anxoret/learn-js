describe("pow", function() {

    describe("возводит x в степень 3", function() {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
              assert.equal(pow(x, 3), expected);
            });
        }
    
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

    // ... другие тесты. Можно писать и describe, и it блоки

    // Также мы можем задать before/after функции, которые будут выполняться до/после тестов,
    // а также функции beforeEach/afterEach, выполняемые до/после каждого it.

    before(() => alert("Тестирование началось – перед тестами"));
    after(() => alert("Тестирование закончилось – после всех тестов"));
    beforeEach(() => alert("Перед тестом – начинаем выпонять тест"));
    afterEach(() => alert("После теста – заначиваем выполнение теста"));

    // Обычно beforeEach/afterEach и before/after используются для инициализации, 
    // обнуления счетчиков или чего-нибудь ещё между тестами (или группами тестов).

  });