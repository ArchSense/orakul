const traces = [
  {
    traceId: 'd4a8c47925f4e957e939e430b4538af1',
    parentId: undefined,
    name: 'Create Nest App',
    id: 'b2b4149c5aec8818',
    kind: 0,
    timestamp: 1668014019918227,
    duration: 184768,
    attributes: {
      component: '@nestjs/core',
      'nestjs.type': 'app_creation',
      'nestjs.version': '9.1.4',
      'nestjs.module': 'AppModule'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: 'f1322bdbbbd8a71231129ef7645391dd',
    parentId: 'df6db704c3f53f51',
    name: 'middleware - query',
    id: 'f3dca94d19c81d1c',
    kind: 0,
    timestamp: 1668014040324680,
    duration: 887,
    attributes: {
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: 'f1322bdbbbd8a71231129ef7645391dd',
    parentId: 'df6db704c3f53f51',
    name: 'middleware - expressInit',
    id: '7539373ed42ff371',
    kind: 0,
    timestamp: 1668014040328385,
    duration: 669,
    attributes: {
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: 'f1322bdbbbd8a71231129ef7645391dd',
    parentId: undefined,
    name: 'HTTP OPTIONS',
    id: 'df6db704c3f53f51',
    kind: 1,
    timestamp: 1668014040321210,
    duration: 12931,
    attributes: {
      'http.url': 'http://localhost:4000/invoices',
      'http.host': 'localhost:4000',
      'net.host.name': 'localhost',
      'http.method': 'OPTIONS',
      'http.target': '/invoices',
      'http.user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::1',
      'net.host.port': 4000,
      'net.peer.ip': '::1',
      'net.peer.port': 63300,
      'http.status_code': 204,
      'http.status_text': 'NO CONTENT',
      'http.route': ''
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: 'f1322bdbbbd8a71231129ef7645391dd',
    parentId: 'df6db704c3f53f51',
    name: 'middleware - corsMiddleware',
    id: '70824fa328db3518',
    kind: 0,
    timestamp: 1668014040329380,
    duration: 6159,
    attributes: {
      'http.route': '/',
      'express.name': 'corsMiddleware',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - query',
    id: 'ef79002c39d8788c',
    kind: 0,
    timestamp: 1668014040337232,
    duration: 46,
    attributes: {
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - expressInit',
    id: '7213cb4967e46658',
    kind: 0,
    timestamp: 1668014040337396,
    duration: 121,
    attributes: {
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - corsMiddleware',
    id: '8261ff2f2250998f',
    kind: 0,
    timestamp: 1668014040337614,
    duration: 231,
    attributes: {
      'http.route': '/',
      'express.name': 'corsMiddleware',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - jsonParser',
    id: '12ee6365821a6565',
    kind: 0,
    timestamp: 1668014040337918,
    duration: 16150,
    attributes: {
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - urlencodedParser',
    id: 'a199c6620116fe45',
    kind: 0,
    timestamp: 1668014040354195,
    duration: 181,
    attributes: {
      'http.route': '/',
      'express.name': 'urlencodedParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'middleware - <anonymous>',
    id: '3d186b3b0c4cd460',
    kind: 0,
    timestamp: 1668014040354525,
    duration: 258,
    attributes: {
      'http.route': '/',
      'express.name': '<anonymous>',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'request handler - /invoices',
    id: 'f5b19d8955eb6958',
    kind: 0,
    timestamp: 1668014040355089,
    duration: 98,
    attributes: {
      'http.route': '/invoices',
      'express.name': '/invoices',
      'express.type': 'request_handler'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '094612d330f70c51',
    name: 'IdsService.generateId',
    id: '3c6a8e0ba9c66d4a',
    kind: 0,
    timestamp: 1668014040356254,
    duration: 17,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '094612d330f70c51',
    name: 'StorageService.saveInvoice',
    id: 'bd5b6e51434f14af',
    kind: 0,
    timestamp: 1668014040356394,
    duration: 20,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '71a6c8771176a0ad',
    name: 'InvoicesService.add',
    id: '094612d330f70c51',
    kind: 0,
    timestamp: 1668014040356149,
    duration: 271,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '7c2955b83658683f',
    name: 'addInvoice',
    id: '71a6c8771176a0ad',
    kind: 0,
    timestamp: 1668014040355830,
    duration: 597,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'handler',
      'nestjs.callback': 'addInvoice'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: undefined,
    name: 'PUT /invoices',
    id: '855b17bad4a15cf2',
    kind: 1,
    timestamp: 1668014040337053,
    duration: 19922,
    attributes: {
      'http.url': 'http://localhost:4000/invoices',
      'http.host': 'localhost:4000',
      'net.host.name': 'localhost',
      'http.method': 'PUT',
      'http.target': '/invoices',
      'http.user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'http.request_content_length_uncompressed': 36,
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::1',
      'net.host.port': 4000,
      'net.peer.ip': '::1',
      'net.peer.port': 63300,
      'http.status_code': 200,
      'http.status_text': 'OK',
      'http.route': '/invoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '9e54019f1a88fea069f293da90f1d9c7',
    parentId: '855b17bad4a15cf2',
    name: 'InvoicesController.addInvoice',
    id: '7c2955b83658683f',
    kind: 0,
    timestamp: 1668014040355371,
    duration: 1615,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'request_context',
      'http.method': 'PUT',
      'http.url': '/invoices',
      'http.route': '/invoices',
      'nestjs.controller': 'InvoicesController',
      'nestjs.callback': 'addInvoice'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - query',
    id: 'db36fb1c6a771d64',
    kind: 0,
    timestamp: 1668014040370239,
    duration: 37,
    attributes: {
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - expressInit',
    id: 'e0c4e2a3f164f6f7',
    kind: 0,
    timestamp: 1668014040370307,
    duration: 29,
    attributes: {
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - corsMiddleware',
    id: '24a23c6a9342168d',
    kind: 0,
    timestamp: 1668014040370361,
    duration: 24,
    attributes: {
      'http.route': '/',
      'express.name': 'corsMiddleware',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - jsonParser',
    id: '2e72693371f5c999',
    kind: 0,
    timestamp: 1668014040370408,
    duration: 96,
    attributes: {
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - urlencodedParser',
    id: '84455bb7f3488a0d',
    kind: 0,
    timestamp: 1668014040370537,
    duration: 11,
    attributes: {
      'http.route': '/',
      'express.name': 'urlencodedParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'middleware - <anonymous>',
    id: '9ce88ac7bca94dbd',
    kind: 0,
    timestamp: 1668014040370722,
    duration: 141,
    attributes: {
      'http.route': '/',
      'express.name': '<anonymous>',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'request handler - /invoices',
    id: '1644fa6c53539bf3',
    kind: 0,
    timestamp: 1668014040370962,
    duration: 6,
    attributes: {
      'http.route': '/invoices',
      'express.name': '/invoices',
      'express.type': 'request_handler'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'de1a31ccb9eee27d',
    name: 'StorageService.getInvoices',
    id: '64cbb206f56ef250',
    kind: 0,
    timestamp: 1668014040371134,
    duration: 14,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: '6156ea885945c486',
    name: 'InvoicesService.list',
    id: 'de1a31ccb9eee27d',
    kind: 0,
    timestamp: 1668014040371106,
    duration: 387,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: '5e5da4367b4086ec',
    name: 'getAllInvoices',
    id: '6156ea885945c486',
    kind: 0,
    timestamp: 1668014040371043,
    duration: 464,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'handler',
      'nestjs.callback': 'getAllInvoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: undefined,
    name: 'GET /invoices',
    id: 'c901446e9181d437',
    kind: 1,
    timestamp: 1668014040370028,
    duration: 2441,
    attributes: {
      'http.url': 'http://localhost:4000/invoices',
      'http.host': 'localhost:4000',
      'net.host.name': 'localhost',
      'http.method': 'GET',
      'http.target': '/invoices',
      'http.user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::1',
      'net.host.port': 4000,
      'net.peer.ip': '::1',
      'net.peer.port': 63305,
      'http.status_code': 200,
      'http.status_text': 'OK',
      'http.route': '/invoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '80a449b0814b65205641d4af031e6fa8',
    parentId: 'c901446e9181d437',
    name: 'InvoicesController.getAllInvoices',
    id: '5e5da4367b4086ec',
    kind: 0,
    timestamp: 1668014040371005,
    duration: 1475,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'request_context',
      'http.method': 'GET',
      'http.url': '/invoices',
      'http.route': '/invoices',
      'nestjs.controller': 'InvoicesController',
      'nestjs.callback': 'getAllInvoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - query',
    id: 'a856ae3b02acb604',
    kind: 0,
    timestamp: 1668014040373127,
    duration: 30,
    attributes: {
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - expressInit',
    id: '078c695aeeb2b3d7',
    kind: 0,
    timestamp: 1668014040373181,
    duration: 25,
    attributes: {
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - corsMiddleware',
    id: 'e6ceb81f9734533e',
    kind: 0,
    timestamp: 1668014040373226,
    duration: 17,
    attributes: {
      'http.route': '/',
      'express.name': 'corsMiddleware',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - jsonParser',
    id: 'e7efed2c43148867',
    kind: 0,
    timestamp: 1668014040373259,
    duration: 14,
    attributes: {
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - urlencodedParser',
    id: '16dc9f642c7f30f3',
    kind: 0,
    timestamp: 1668014040373290,
    duration: 10,
    attributes: {
      'http.route': '/',
      'express.name': 'urlencodedParser',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'middleware - <anonymous>',
    id: '464302f9f2211b30',
    kind: 0,
    timestamp: 1668014040373326,
    duration: 24,
    attributes: {
      'http.route': '/',
      'express.name': '<anonymous>',
      'express.type': 'middleware'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'request handler - /invoices',
    id: '6f877db7a2a0b67e',
    kind: 0,
    timestamp: 1668014040373383,
    duration: 4,
    attributes: {
      'http.route': '/invoices',
      'express.name': '/invoices',
      'express.type': 'request_handler'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: '176f1b89081077eb',
    name: 'StorageService.getInvoices',
    id: 'e39f87f9fb2d3c21',
    kind: 0,
    timestamp: 1668014040373462,
    duration: 3,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: '3949fdddeaf0c4c3',
    name: 'InvoicesService.list',
    id: '176f1b89081077eb',
    kind: 0,
    timestamp: 1668014040373452,
    duration: 141,
    attributes: {},
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: '65e90751b22ba2ea',
    name: 'getAllInvoices',
    id: '3949fdddeaf0c4c3',
    kind: 0,
    timestamp: 1668014040373437,
    duration: 162,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'handler',
      'nestjs.callback': 'getAllInvoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: undefined,
    name: 'GET /invoices',
    id: 'af7d667d6c99b46d',
    kind: 1,
    timestamp: 1668014040373021,
    duration: 918,
    attributes: {
      'http.url': 'http://localhost:4000/invoices',
      'http.host': 'localhost:4000',
      'net.host.name': 'localhost',
      'http.method': 'GET',
      'http.target': '/invoices',
      'http.user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::1',
      'net.host.port': 4000,
      'net.peer.ip': '::1',
      'net.peer.port': 63305,
      'http.status_code': 304,
      'http.status_text': 'NOT MODIFIED',
      'http.route': '/invoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  },
  {
    traceId: '91e9d8a4edc5da211d12cec2a8a82cb0',
    parentId: 'af7d667d6c99b46d',
    name: 'InvoicesController.getAllInvoices',
    id: '65e90751b22ba2ea',
    kind: 0,
    timestamp: 1668014040373409,
    duration: 539,
    attributes: {
      component: '@nestjs/core',
      'nestjs.version': '9.1.4',
      'nestjs.type': 'request_context',
      'http.method': 'GET',
      'http.url': '/invoices',
      'http.route': '/invoices',
      'nestjs.controller': 'InvoicesController',
      'nestjs.callback': 'getAllInvoices'
    },
    status: { code: 0 },
    events: [],
    links: []
  }
  
];

export default traces;