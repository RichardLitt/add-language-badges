import test from 'ava'
import fn from './'

test('parse.trimLinguistOutput works with one return', t => {
  t.is(fn('100% JavaScript\n'), {
    'JavaScript': '100'
  })
})
