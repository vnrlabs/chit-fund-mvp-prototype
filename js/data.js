window.ChitData = {
  chits: [
    {id:'CH-2401',name:'Akshaya 10L / 20',value:1000000,members:20,filled:20,duration:20,cycle:8,status:'Active',nextAuction:'28 Aug 2026',installment:44500,collection:88,strategy:'CALC-S2'},
    {id:'CH-2402',name:'Mangalam 5L / 20',value:500000,members:20,filled:17,duration:20,cycle:0,status:'Open',nextAuction:'Not scheduled',installment:25000,collection:0,strategy:'CALC-S3'},
    {id:'CH-2403',name:'Sree 12L / 24',value:1200000,members:24,filled:24,duration:24,cycle:14,status:'Active',nextAuction:'03 Sep 2026',installment:46300,collection:92,strategy:'CALC-S1'},
    {id:'CH-2404',name:'Nidhi 8L / 20',value:800000,members:20,filled:8,duration:20,cycle:0,status:'Open',nextAuction:'Not scheduled',installment:40000,collection:0,strategy:'CALC-S2'}
  ],
  members: [
    {id:'MB-10021',name:'Arun Kumar',phone:'+91 98765 41021',city:'Chennai',active:2,pending:0,lastPay:'19 Aug 2026',regularity:'Regular'},
    {id:'MB-10034',name:'Meena R',phone:'+91 98403 11290',city:'Coimbatore',active:1,pending:44500,lastPay:'16 Jul 2026',regularity:'Watch'},
    {id:'MB-10056',name:'Vijay S',phone:'+91 98840 92144',city:'Chennai',active:3,pending:0,lastPay:'20 Aug 2026',regularity:'Regular'},
    {id:'MB-10078',name:'Lakshmi P',phone:'+91 97910 83470',city:'Madurai',active:1,pending:89000,lastPay:'14 Jun 2026',regularity:'Delinquent'},
    {id:'MB-10110',name:'Karthik N',phone:'+91 90031 21008',city:'Chennai',active:2,pending:0,lastPay:'18 Aug 2026',regularity:'Regular'},
    {id:'MB-10123',name:'Divya M',phone:'+91 99401 00218',city:'Salem',active:1,pending:44500,lastPay:'20 Jul 2026',regularity:'Watch'}
  ],
  bids: [
    {rank:1,id:'MB-10056',name:'Vijay S',bid:210000,time:'11:23 AM'},
    {rank:2,id:'MB-10110',name:'Karthik N',bid:200000,time:'11:21 AM'},
    {rank:3,id:'MB-10021',name:'Arun Kumar',bid:190000,time:'11:17 AM'},
    {rank:4,id:'MB-10123',name:'Divya M',bid:180000,time:'11:12 AM'}
  ],
  payments: [
    {id:'MB-10021',name:'Arun Kumar',due:44500,paid:44500,status:'Paid',date:'19 Aug',ref:'UPI-819244'},
    {id:'MB-10034',name:'Meena R',due:44500,paid:0,status:'Overdue',date:'—',ref:'—'},
    {id:'MB-10056',name:'Vijay S',due:44500,paid:44500,status:'Paid',date:'20 Aug',ref:'NEFT-104821'},
    {id:'MB-10078',name:'Lakshmi P',due:44500,paid:0,status:'Overdue',date:'—',ref:'—'},
    {id:'MB-10110',name:'Karthik N',due:44500,paid:44500,status:'Paid',date:'18 Aug',ref:'CASH-240818'},
    {id:'MB-10123',name:'Divya M',due:44500,paid:0,status:'Pending',date:'—',ref:'—'}
  ]
};
