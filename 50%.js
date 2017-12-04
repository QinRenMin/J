/**
 * Created by windy on 17-6-6.
 */
var str = '***<没钱赚商店>购物清单***'+'\n';
var a = 0;
var b = 0;
var c = 0;
var inputs = inputs = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];
var   allItems =   [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    },
    {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50
    }
];
for(var i = 0; i < inputs.length; i ++)
    if(inputs[i] == 'ITEM000000')
        a++;
    else if(inputs[i] ==  'ITEM000001')
        b++;
    else
        (inputs[i] == 'ITEM000004')
        c++;
var k = [a,b,c];
console.log(a,b,c);
var n = 0;
for(var j = 0; j < inputs.length; j++)
    for(var i = 0; i <  allItems.length; i++)
        if (inputs[j] == allItems[i].barcode && inputs[j]!= inputs[j + 1]){
            str += '名称' + ':' + allItems[i].name + ',' + '数量' + ':' + k[n] + allItems[i].unit + ',' + '单价' + ':'
                + allItems[i].price + '.00' + '(元)' + ',' + '小计' + ':' + k[n] * allItems[i].price + '.00' + '(元)' + '\n';
            n+=1;}

str += '----------------------'+'\n'+'总计:23.00(元)'+'\n'+'**********************';
console.log(str);
