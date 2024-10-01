import { Request, Response } from 'express';
import { obterinforamcao, adicionarinformacao } from '../mediador/lendo';

export const obterinformaçao = async (req: Request, res: Response) => {
  try {
    const readings = await getAllReadings();
    res.status(200).json(readings);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter leituras.' });
  }
};

export const createReading = async (req: Request, res: Response) => {
  try {
    const { userId, consumptionWater, consumptionGas, date } = req.body;
    await addReading({ userId, consumptionWater, consumptionGas, date });
    res.status(201).json({ message: 'Leitura registrada com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar leitura.' });
  }
};
