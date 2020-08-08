const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados.
    proffyValue = {
        name: "Papa Francisco",
        avatar: "data:image/jpeg;base64,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",
        whatsapp: "0-0000-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
       // O proffy id virá pelo banco de dados.
    }   
    
    classScheduleValues = [
        // Clas_id virá pelo banco de dados, após cadastrarmos a class.
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos.

    // Todos os proffys.
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Consultar as classes de um determinado professor.
    // E trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //  O horário que a pessoa trabalha, por ex, é das 8h as 18h
    // O horário do time_from (8h) precisa ser antes ou igual ao horário solicidado
    // O time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)

})