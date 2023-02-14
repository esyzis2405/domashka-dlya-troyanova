const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.set('view engine', 'ejs')

app.use('/contact', function(request, response){
    response.render('contact',{
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['emirkosya@rambler.ru', 'emirkosya@mail.ru'],
        phone: '+77071363646',
    })
})


app.use("/fio", function(request, response){
    response.render("fio",{
        title: 'ФИО',
        fioVisible: true,
        fio: ['Сыздыков Эмир Ерболович'],
    })
})

app.use("/info", function(request, response){
    response.render("info",{
        title: 'Обо мне',
        infoVisible: true,
        info: ['Здравствуйте, меня зовут Эмир, этот сайт моя одна из первых наработок в моей будущей IT-индустрии'],
    })
})

app.use("/dopinfo", function(request, response){
    response.render("dopinfo",{
        title: 'Мои увлечения',
        dopinfoVisible: true,
        dopinfo: ['Я увлекаюсь киберспортом, и помимо хожу на учебу, более подробно можете узнать в инстаграмме @tascher322 vk'],
    })
})

app.use("/navik", function(request, response){
    response.render("navik",{
        title: 'Краткая информация',
        navikVisible: true,
        navik: ['Знаю такие программы как: Unity, Unreal Engine 5, Visual Studio, Visual Studio Code'],
    })
})

app.use("/znania", function(request, response){
    response.render("znania",{
        title: 'Мои знания языков',
        znaniaVisible: true,
        znania: ['Я знаю немного языков, такие как: HTMl, Js, C++, C#'],
    })
})

app.use('/', function (request, response){
    response.render('partials/menu.ejs')
   
})

app.listen(3000)