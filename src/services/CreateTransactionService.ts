import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    if (type !== 'income' && type !== 'outcome') {
      throw Error('Type is not compatible');
    }

    return transaction;
  }
}

export default CreateTransactionService;
