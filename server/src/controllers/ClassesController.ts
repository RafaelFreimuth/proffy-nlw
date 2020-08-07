import { Request, Response} from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: Number;
    from: String;
    to: String    
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filter = request.query;

       // if(!filter.subject || !filter.week_day || !filter.time) {
       //     return response.status(400).json({
        //        error: 'Missing filters to search classes'
        //    })
       // }

      //  const timeInMinutes = convertHourToMinutes(filter.time.toString());

        const classes = await db('classes')
           // .whereExists(function() {
           //     this.select('class_schedule.*')
           //         .from('class_schedule')
           //         .whereRaw('`class_schedule`.`call_id` = `classes`.`id`')
           //         .whereRaw('`class_schedule`.`week_day` = ??', [Number(filter.week_day as string)])
           //         .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          //          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
          //  })
           // .where('classes.subject', '=', filter.subject as string)
            .join('users', 'classes.user_id', '=', 'users.id');
           // .select(['classes.*', 'users.*'])

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp, 
                bio
            })
        
            const user_id = insertUsersId[0];
        
            const insertClasses = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
        
            const class_id = insertClasses[0];
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return  {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id
                }
            })
        
            await trx('class_schedule').insert(classSchedule);
        
            await trx.commit();
            console.log('terminou')
            return response.status(201).send();
        } catch (error) {
    
            await trx.rollback();
    
            return response.status(400).json({
                mensagem: error
            })
        }
    }
}