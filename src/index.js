import logger from './winston';
import { sum, divide } from './utils';

logger.info(`The result of 8 + 2 is ${sum(8, 2)}`);
logger.info(`The result of 10 / 2 is ${divide(10, 2)}`);
