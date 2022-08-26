/* eslint-disable prettier/prettier */
import ConnectDb from '../../../../../Server/middleware/connection2';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Session} from '../../../../../Server/Models/HecDetails/hecDetails'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `DELETE`) {
    try{
      const {sessionId} = req.query
      console.log(sessionId)
      const delsession =await Session.findByIdAndRemove({
        _id:sessionId
      })
       
       res.status(200).json({
        success:true,
        message:`Deleted ${delsession.sessionTitle} session`
    });
    }catch(e){
      res.status(400).json({
        success:false,
        error:e.message
    })
    }
    
  }else{
    res.status(200).json({error:`this Method is not Found`})
  }
};
export default ConnectDb(handler);
