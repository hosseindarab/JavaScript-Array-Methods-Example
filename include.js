const names = ['Jessy', 'Henry', 'Nicola']

const results = names.includes('Henry')

if(results){
    console.log(String.fromCodePoint(0x1F600))
}else{
    console.log(String.fromCodePoint(0x1F615))
}