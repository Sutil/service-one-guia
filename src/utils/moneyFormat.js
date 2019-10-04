import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: moneyFormat } = new IntlPolyfill.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
