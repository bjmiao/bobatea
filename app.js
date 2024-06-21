
function bobaApp() {
    return {
        drinks: [
            { id: 1, name: '大红袍冻柠茶', price: 4.99, image: 'https://picsum.photos/200/200?random=1' },
            { id: 2, name: '纯牛奶', price: 5.49, image: 'https://picsum.photos/200/200?random=2' },
            { id: 3, name: '椰奶', price: 5.99, image: 'https://picsum.photos/200/200?random=3' },
            { id: 4, name: '希腊酸奶', price: 5.99, image: 'https://picsum.photos/200/200?random=4' },
        ],
        toppings: [
            // { id: 1, name: '立顿红茶茶冻', price: 0.50 },
            { id: 2, name: '大红袍红茶茶冻', price: 0.60 },
            // { id: 3, name: '焙茶绿茶茶冻', price: 0.75 },
            { id: 4, name: '茉莉花茶茶冻', note:'（取决于明天超市买得买不到茉莉花茶）', price: 0.75 },
            { id: 5, name: '牛奶奶冻', price: 0.75 },
            { id: 6, name: '椰奶奶冻', price: 1.00 },
            { id: 7, name: '抹茶奶冻', price: 1.00 },
            { id: 8, name: '焦糖珍珠', note:'（感谢楼下邻居赞助的珍珠）', price: 1.00 },
            { id: 9, name: '冷冻火龙果', note:'(Costco买的)', price: 1.00 },
            { id: 10, name: '冷冻草莓', note:'(自己冻的)', price: 1.00 },
            { id: 11, name: '冷冻蓝莓', note:'(自己冻的)', price: 1.00 },
            { id: 12, name: '冷冻葡萄', note:'(自己冻的)', price: 1.00 },
            { id: 13, name: '杏仁脆片', price: 1.00 },
            { id: 14, name: '葡萄干', note:'(半年前买的)', price: 1.00 },
            { id: 15, name: '枸杞', note:'(?)', price: 1.00 },
            { id: 16, name: '花椒粒', note:'（慎选）', price: 1.00 },
            { id: 17, name: '猫粮', note:'（慎选）', price: 1.00 },
        ],
        presets: [
            { name: '就想来杯冻柠茶', icon: 'fas fa-star', drinkId: 1, sugarLevel: '50%', iceLevel: '不加冰', toppings: []},
            { name: '奶冻撞冻柠茶', icon: 'fas fa-leaf', drinkId: 1, sugarLevel: '50%', iceLevel: '不加冰', toppings: [5]},
            { name: '冻柠茶冻撞奶', icon: 'fas fa-crown', drinkId: 2, sugarLevel: '50%', iceLevel: '不加冰', toppings: [2]},
            { name: '大家撞奶', icon: 'fas fa-crown', drinkId: 2, sugarLevel: '50%', iceLevel: '不加冰', toppings: [2, 7, 8, 9, 12]},
            { name: '大家撞冻柠茶', icon: 'fas fa-crown', drinkId: 1, sugarLevel: '50%', iceLevel: '不加冰', toppings: [5, 6, 7, 8, 9]},
            { name: '酸奶水果捞', icon: 'fas fa-crown', drinkId: 4, sugarLevel: '50%', iceLevel: '不加冰', toppings: [2, 4, 9, 10, 11, 12, 13, 14]},
        ],

        selectedDrink: null,
        sugarLevel: '100%',
        iceLevel: '不加冰',
        selectedToppings: [],
        orderPlaced: false,

        selectDrink(drink) {
            this.selectedDrink = drink;
        },

        selectPreset(preset) {
            this.selectedDrink = this.drinks.find(d => d.id === preset.drinkId);
            this.sugarLevel = preset.sugarLevel;
            this.iceLevel = preset.iceLevel;
            this.selectedToppings = preset.toppings;
        },

        get totalPrice() {
            if (!this.selectedDrink) return 0;
            const toppingsCost = this.selectedToppings.reduce((sum, id) => 
                sum + this.toppings.find(t => t.id == id).price, 0);
            return this.selectedDrink.price + toppingsCost;
        },

        placeOrder() {
            // Here you would typically send the order to a server
            this.orderPlaced = true;
            setTimeout(() => {
                this.resetOrder();
            }, 3000);
        },

        // resetOrder() {
        //     this.selectedDrink = null;
        //     this.sugarLevel = '100%';
        //     this.iceLevel = 'Normal Ice';
        //     this.selectedToppings = [];
        //     this.orderPlaced = false;
        // }
    }
}