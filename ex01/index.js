const {resolve} = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {

const files = fs.readdirSync(path)
let ret = 
`
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [${files.map(file=>`
{
    path: '/${file.replace('.vue','')}',
    name: '${file.replace('.vue','')}',
    component: () => import('./views/${file}')
},`).join('')}

    ]
})`
return ret
}

