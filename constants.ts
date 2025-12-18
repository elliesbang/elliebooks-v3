
import { Book, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '표지', path: '/' },
  { label: '철학', path: '/philosophy' },
  { label: '서재', path: '/library' },
  { label: '편지', path: '/contact' },
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Future of AI',
    category: 'Technology',
    price: 18000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz0axvhyCr9aVVrRTnN7Vhzc6iUAAAx6WU0wLk4FE73qKjLSymuYrQVh5Lt7EFHrMiIkdcMW8cBvFmfHchLcL-1FsUJ5ja0ibdaFOthq87JRBVeBwXNFKJOS3rt3pcQksvWZ3oaYrGgyOSgcJxStj7OfMRSNL3mIyECr0UtbUHWY3KfGhKwUX-WOXmbQP_mam_dBn8ZTd8gbm_5pXvXY3xLuJnaXqHPKiKAo_iYQeeYqpyVLEsxY_wxIJ4UaNgG7BTHO6cCVF2AQs',
    badge: 'New',
    author: '엘리 북스 팀'
  },
  {
    id: '2',
    title: 'Analog Dreams',
    category: 'Philosophy',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_X9wUpikSXfOKVDthE4N1ehFaWPTbm_01XlWusstnqeMLmpC9coiS_68garGVuepUhfdZ6hjvroga0uLMd4FZ-jijXCMLto8WxmaM9rlSj2k__t65WnKAkLW25R4HVLZ37p0Q1YcvrLo9P5y7_N_-u8ZibRqQW8K8qcdxrYoE10upOSwZm0xbJD9SDd_U9YRHe8DkyQjxObyhSVXig7LaGv3RN73WU90GTbv19YkAmQ293EsLA66Q3WuryfgQ3PqLrmOIbnfqqkQ'
  },
  {
    id: '3',
    title: 'Code & Poetry',
    category: 'Essays',
    price: 16500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6EtvesYudi023h3Dhx9pTd1KtzI8MIXpxNOudambih79QmTknDonSBbnGESqYD6xoSnbD3KyLpHCnEk0kzVGEamMFb0NrvjkQ2bV8rX2p0DtNFhKLQAZ179LPG0NNj_jY7lEKLtpHdhfuvTJFJDfly9J2hmEkPUdMHj6iDJp-0rvtBOsjlWEOy4LQPOV_G387fiLdelDt3KvNsvx9nz4kl8P-NqO9nr-7XONgP0wxSgW2Bv0-e58pQYDO4GCAXXY31a5infe3hGc',
    badge: 'Best Seller'
  },
  {
    id: '4',
    title: 'Midnight Library',
    category: 'Fiction',
    price: 14000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsFyRqu5EKW0IoYzOTih4JuVke_rCpE5oaGGjDfG3PiL35ic__wEorpmlDBNF9ygG8b6aF9En2eaJgvPYzJGXINQ4T3DBOm2_e2a4KolrpOUiBEZdV57-FTDyZ0__0IOlzdXkhfogKhM8x4jGhe6986knaghTHz_SOoT0c7t6iyFO4nnAZ8Ox3uc0MqWjwV2GMmKl5a3xXVl8EehwMXHar1v1PRja3xw7G5rE_4RDsSkz1IpuCvyBWGHAeFaHhdIW6Ef9cPTLxrRs'
  },
  {
    id: '5',
    title: 'Silicon Soul',
    category: 'Tech',
    price: 19000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFsl4xE3RpAgjleSW22OAz1JbM59jUe-W-SdThFKsy9zdau301fNWu0qeadn5ygyVQ5ibQbVCxlnSyfA-p6mz_XiAS2dbpWSgXMqT6_a5Pqjpjs3Ql3ehMOxcvRqzLlk1ENii6XU2orNzvkY4PeSTDfeeIyq447dIg57CMv8JQx9Yn6e5_AoOeNv4n6y53Fu1tiT79abI63OzEZnu9K9kadJ-96bt4XeDDksEN5BXWLr_QxYWznSh3ReWQeSG5s4IWPEIAFmTh9c'
  },
  {
    id: '6',
    title: 'Paper Heart',
    category: 'Romance',
    price: 13500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg7VMZ6djLhpLy129vwsBEFW32lR06ZF62PLhzK7y6jNqBy218eRjJbiKz622ymcaXYN2lHh7kQx-dRC4wpSZH22qMxk0D_hJziLYJiKfLATQrRehZnSn867OUJhMPGlwulVNGI7WBB-zBxGHCtCGZYGRulDn-7lTMd1n2abEd--2y4r4dc2l83EbL97eLNs2JlXs8lLziVnt3XfvZwmSQhcr8SFFXn-TIFCDZ0RF6xNLRjoz2cHFUFVxSLd8oLPk1oribsU_HwDo'
  },
  {
    id: '7',
    title: 'Neural Networks',
    category: 'Science',
    price: 22000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb4-lizELzpXMPm3fywbDVUNjQHu9HLHfqNAFUDDTKeKHldRBO6jyTKkbqNwrGVBnr8WWhT6gFTeclDhezqJ283atcSPsVDy2bTUaMa5OkQRX-GI-y30eAwZiVaAO93OE39QvS2_l45MxAzkr6Hq7obwD13JZwWb1IOeAtijmy7Df86YfnDv_hkd9FegKCI8yBd1U-l1tbvpctz5tSmh9rThnevxVfseBToQsFg2O6J8NYgn8EtgC5ghgKwkjR0Y64V2upuBLolA'
  },
  {
    id: '8',
    title: 'Human Touch',
    category: 'Psychology',
    price: 17000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmA0NSv0aeCF3fAloBwkIQ79RCWJglXFMx_cBG7uG95LG7506HXyWTQTUZ7HcuV3d-5oxe3z8IDQQmJu5gv_IUnWvUsJMsZRq-bjq-zOTs_iLeB86OxFRTyi_9UhaAY4tfJVw_caI9vDQ0-PEUjxsyu308ed9vJKunhjV3x8YCiZKtjeGcnMbexsugnvSEhx2dbH_GusHoWm-0I2IC1t2oSkC6Zhi59kEjUYhRno2typ2rivVmgdlINzKpyFs3g1bNoJIwfS9Wwgs'
  }
];
