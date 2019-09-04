const {
    Face,
    Name,
    Interest,
    UnixTransport,
    DataUtils
} = require('ndn-js-sdk')

var face = new Face(new UnixTransport());
Interest.setDefaultCanBePrefix(true);
function onTimeout(interest) {
    console.log('timed out')
    var nameStr = interest.getName().toUri().split("/").slice(0, -2).join("/");
    console.log(nameStr)
}

function onData(interest, content, T0) {
    var strContent = DataUtils.toString(content.getContent().buf());
    console.log(strContent)
}

function onNack(interest) {
    console.log('nack...')
}

function fetch(name) {
   // for(const i of [1,2,3,4,5]){
        const nameUri = `${name}`
        var interest = new Interest(new Name(nameUri))
        face.expressInterest(interest, onData, onTimeout, onNack);
   // }
};

function main() {
    if (process.argv.length === 2) {
        console.log('please input the file name')
        return 1
    }
    const name = process.argv[2];
    fetch(name)
};

main()