
module.exports = {
    devtool:'source-map',
    entry:__dirname+'/app/main.js',
    output:{
        path:__dirname+'/public/',
        filename:'build.js'
    }
}
