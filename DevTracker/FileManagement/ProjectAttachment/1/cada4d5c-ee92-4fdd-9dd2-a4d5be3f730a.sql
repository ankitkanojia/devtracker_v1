USE [DemoMyCodeRule]
GO
/****** Object:  Table [dbo].[Link]    Script Date: 4/22/2017 2:34:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Link](
	[LinkID] [bigint] IDENTITY(1,1) NOT NULL,
	[ModuleID] [bigint] NOT NULL,
	[LinkName] [varchar](50) NOT NULL,
	[Controller] [varchar](50) NOT NULL,
	[Action] [varchar](50) NOT NULL,
	[ViewIndex] [int] NULL,
	[IsDefault] [bit] NOT NULL,
	[IsSingle] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
	[IsVisible] [bit] NULL CONSTRAINT [DF_Link_IsVisible]  DEFAULT ((0)),
 CONSTRAINT [PK_Link] PRIMARY KEY CLUSTERED 
(
	[LinkID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Module]    Script Date: 4/22/2017 2:34:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Module](
	[ModuleID] [bigint] IDENTITY(1,1) NOT NULL,
	[ModuleName] [varchar](50) NOT NULL,
	[CssClass] [varchar](100) NOT NULL,
	[ViewIndex] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_Module] PRIMARY KEY CLUSTERED 
(
	[ModuleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RoleMaster]    Script Date: 4/22/2017 2:34:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleMaster](
	[RoleIMasterD] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](20) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_RoleMaster] PRIMARY KEY CLUSTERED 
(
	[RoleIMasterD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserMaster]    Script Date: 4/22/2017 2:34:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserMaster](
	[UserMasterID] [bigint] IDENTITY(1,1) NOT NULL,
	[HASH] [nvarchar](max) NOT NULL,
	[SALT] [varbinary](512) NOT NULL,
	[Mobile] [nvarchar](20) NOT NULL,
	[Email] [nvarchar](500) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[FullName] [nvarchar](500) NOT NULL,
	[RoleMasterID] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedDateInt]  AS (((((datepart(year,[CreatedDate])*(10000000000.)+datepart(month,[CreatedDate])*(100000000))+datepart(day,[CreatedDate])*(1000000))+datepart(hour,[CreatedDate])*(10000))+datepart(minute,[CreatedDate])*(100))+datepart(second,[CreatedDate])),
	[UpdateDate] [datetime] NULL,
	[UpdateDateInt]  AS (((((datepart(year,[UpdateDate])*(10000000000.)+datepart(month,[UpdateDate])*(100000000))+datepart(day,[UpdateDate])*(1000000))+datepart(hour,[UpdateDate])*(10000))+datepart(minute,[UpdateDate])*(100))+datepart(second,[UpdateDate])),
	[IsActive] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsActive_1]  DEFAULT ((1)),
	[IsDelete] [bit] NOT NULL CONSTRAINT [DF_UserMaster_IsDelete_1]  DEFAULT ((0)),
 CONSTRAINT [PK_UserMaster] PRIMARY KEY CLUSTERED 
(
	[UserMasterID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserRight]    Script Date: 4/22/2017 2:34:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRight](
	[UserRightID] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleMasterID] [bigint] NOT NULL,
	[LinkID] [bigint] NOT NULL,
	[IsReadOnly] [bit] NOT NULL CONSTRAINT [DF_UserRight_IsReadOnly]  DEFAULT ((0)),
	[IsReadWrite] [bit] NOT NULL CONSTRAINT [DF_UserRight_IsReadWrite]  DEFAULT ((0)),
	[CreatedDate] [datetime] NOT NULL CONSTRAINT [DF_UserRight_CreatedDate]  DEFAULT (getdate()),
	[CreatedDateInt]  AS ((datepart(year,[CreatedDate])*(10000)+datepart(month,[CreatedDate])*(100))+datepart(day,[CreatedDate])),
 CONSTRAINT [PK_UserRight] PRIMARY KEY CLUSTERED 
(
	[UserRightID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Link] ON 

INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (1, 1, N'Dashboard', N'Home', N'Index', 1, 1, 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (2, 2, N'Algolia API', N'API', N'Algolia', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (3, 3, N'Role Management', N'BigConcept', N'RoleMaster', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (4, 4, N'QR Scan / Generate', N'CodeReader', N'QRScan', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (5, 5, N'Izi Toast', N'Plugins', N'IziToast', 1, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Link] ([LinkID], [ModuleID], [LinkName], [Controller], [Action], [ViewIndex], [IsDefault], [IsSingle], [CreatedDate], [IsVisible]) VALUES (6, 5, N'Izi Toast', N'IziToast', N'Plugins', 2, 1, 0, CAST(N'1993-04-16 00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Link] OFF
SET IDENTITY_INSERT [dbo].[Module] ON 

INSERT [dbo].[Module] ([ModuleID], [ModuleName], [CssClass], [ViewIndex], [CreatedDate]) VALUES (1, N'Home', N'fa fa-user', 1, CAST(N'1993-04-16 00:00:00.000' AS DateTime))
INSERT [dbo].[Module] ([ModuleID], [ModuleName], [CssClass], [ViewIndex], [CreatedDate]) VALUES (2, N'API', N'fa fa-user', 2, CAST(N'1993-04-16 00:00:00.000' AS DateTime))
INSERT [dbo].[Module] ([ModuleID], [ModuleName], [CssClass], [ViewIndex], [CreatedDate]) VALUES (3, N'BigConcept', N'fa fa-user', 3, CAST(N'1993-04-16 00:00:00.000' AS DateTime))
INSERT [dbo].[Module] ([ModuleID], [ModuleName], [CssClass], [ViewIndex], [CreatedDate]) VALUES (4, N'CodeReader', N'fa fa-user', 4, CAST(N'1993-04-16 00:00:00.000' AS DateTime))
INSERT [dbo].[Module] ([ModuleID], [ModuleName], [CssClass], [ViewIndex], [CreatedDate]) VALUES (5, N'Plugins', N'fa fa-user', 5, CAST(N'1993-04-16 00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Module] OFF
SET IDENTITY_INSERT [dbo].[RoleMaster] ON 

INSERT [dbo].[RoleMaster] ([RoleIMasterD], [RoleName], [IsActive]) VALUES (1, N'Super Admin', 1)
INSERT [dbo].[RoleMaster] ([RoleIMasterD], [RoleName], [IsActive]) VALUES (2, N'Admin', 1)
INSERT [dbo].[RoleMaster] ([RoleIMasterD], [RoleName], [IsActive]) VALUES (3, N'Guest', 1)
SET IDENTITY_INSERT [dbo].[RoleMaster] OFF
SET IDENTITY_INSERT [dbo].[UserMaster] ON 

INSERT [dbo].[UserMaster] ([UserMasterID], [HASH], [SALT], [Mobile], [Email], [Username], [FullName], [RoleMasterID], [CreatedDate], [UpdateDate], [IsActive], [IsDelete]) VALUES (1, N'4JUB38dO0R6zqPLQxYbp4PGITTHy6Q3XQqJw4aRKbRSNdyQJkS8Ed114rAYuophnhb4nZ2erKNhhD8ysuyNnV9P3BYkRwFzzCZATNIRKGByIPd3d3n7l2SyeJcbIca9Y', 0xD3F7058911C05CF309901334844A181C883DDDDDDE7EE5D92C9E25C6C871AF58, N'9904415123', N'khuntsr@gmail.com', N'suchit', N'Suchit Khunt', 1, CAST(N'2017-04-05 14:31:42.767' AS DateTime), NULL, 1, 0)
INSERT [dbo].[UserMaster] ([UserMasterID], [HASH], [SALT], [Mobile], [Email], [Username], [FullName], [RoleMasterID], [CreatedDate], [UpdateDate], [IsActive], [IsDelete]) VALUES (2, N'XTnBE1oqyIH0vVYfe1VjTRUQaAeTcQRKWRIPHamGHacaYU6HreZcSe+lI+cXat5xwE8DWnWLCp9nBrdui2Jinm86TEoYksYMEkdTTSn7NvVLp+EkLiRJCC/qObjCiDGm', 0x6F3A4C4A1892C60C1247534D29FB36F54BA7E1242E2449082FEA39B8C28831A6, N'9904415123', N'khuntsr@gmail.com', N'ankit', N'Suchit Khunt', 1, CAST(N'2017-04-05 14:31:59.537' AS DateTime), NULL, 1, 0)
INSERT [dbo].[UserMaster] ([UserMasterID], [HASH], [SALT], [Mobile], [Email], [Username], [FullName], [RoleMasterID], [CreatedDate], [UpdateDate], [IsActive], [IsDelete]) VALUES (3, N's06F5R96Ovj/Kf76a727kGXiB7ns859Cm8gjcNo1ybYxtYvkeqGoKjw66Yg/d5tcIy6lJ5RlpUP+h/8f25Y8v8QqkV822MnTDlNNLwWv+H5AoXBlK2qIx1ckfLdWtaqG', 0xC42A915F36D8C9D30E534D2F05AFF87E40A170652B6A88C757247CB756B5AA86, N'9904415123', N'khuntsr@gmail.com', N'jasmin', N'Suchit Khunt', 1, CAST(N'2017-04-05 14:32:18.953' AS DateTime), NULL, 1, 0)
INSERT [dbo].[UserMaster] ([UserMasterID], [HASH], [SALT], [Mobile], [Email], [Username], [FullName], [RoleMasterID], [CreatedDate], [UpdateDate], [IsActive], [IsDelete]) VALUES (4, N'pm4//p+f1pGXSo/LXGsmqKGruIg8lSs3XyUfPHDGniAHXB7a1RAsXzmaDnZoeceydngoLU0iEDBLzDAM4ymLt7TnZHCX070+S4gLP0sK5qQEu6wICdyqVqn8iz7KeBIp', 0xB4E7647097D3BD3E4B880B3F4B0AE6A404BBAC0809DCAA56A9FC8B3ECA781229, N'9904415123', N'khuntsr@gmail.com', N'orchid', N'Suchit Khunt', 3, CAST(N'2017-04-05 14:32:38.857' AS DateTime), NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[UserMaster] OFF
SET IDENTITY_INSERT [dbo].[UserRight] ON 

INSERT [dbo].[UserRight] ([UserRightID], [RoleMasterID], [LinkID], [IsReadOnly], [IsReadWrite], [CreatedDate]) VALUES (13, 3, 1, 1, 1, CAST(N'2017-04-06 14:12:38.287' AS DateTime))
INSERT [dbo].[UserRight] ([UserRightID], [RoleMasterID], [LinkID], [IsReadOnly], [IsReadWrite], [CreatedDate]) VALUES (14, 3, 2, 1, 1, CAST(N'2017-04-06 14:12:38.297' AS DateTime))
INSERT [dbo].[UserRight] ([UserRightID], [RoleMasterID], [LinkID], [IsReadOnly], [IsReadWrite], [CreatedDate]) VALUES (15, 3, 3, 1, 1, CAST(N'2017-04-06 14:12:38.303' AS DateTime))
INSERT [dbo].[UserRight] ([UserRightID], [RoleMasterID], [LinkID], [IsReadOnly], [IsReadWrite], [CreatedDate]) VALUES (16, 3, 4, 1, 1, CAST(N'2017-04-06 14:12:38.307' AS DateTime))
INSERT [dbo].[UserRight] ([UserRightID], [RoleMasterID], [LinkID], [IsReadOnly], [IsReadWrite], [CreatedDate]) VALUES (17, 3, 5, 1, 1, CAST(N'2017-04-06 14:12:38.310' AS DateTime))
SET IDENTITY_INSERT [dbo].[UserRight] OFF
ALTER TABLE [dbo].[Link]  WITH CHECK ADD  CONSTRAINT [FK_Link_Module] FOREIGN KEY([ModuleID])
REFERENCES [dbo].[Module] ([ModuleID])
GO
ALTER TABLE [dbo].[Link] CHECK CONSTRAINT [FK_Link_Module]
GO
ALTER TABLE [dbo].[UserMaster]  WITH CHECK ADD  CONSTRAINT [FK_UserMaster_RoleMaster] FOREIGN KEY([RoleMasterID])
REFERENCES [dbo].[RoleMaster] ([RoleIMasterD])
GO
ALTER TABLE [dbo].[UserMaster] CHECK CONSTRAINT [FK_UserMaster_RoleMaster]
GO
ALTER TABLE [dbo].[UserRight]  WITH CHECK ADD  CONSTRAINT [FK_UserRight_Link] FOREIGN KEY([LinkID])
REFERENCES [dbo].[Link] ([LinkID])
GO
ALTER TABLE [dbo].[UserRight] CHECK CONSTRAINT [FK_UserRight_Link]
GO
ALTER TABLE [dbo].[UserRight]  WITH CHECK ADD  CONSTRAINT [FK_UserRight_RoleMaster] FOREIGN KEY([RoleMasterID])
REFERENCES [dbo].[RoleMaster] ([RoleIMasterD])
GO
ALTER TABLE [dbo].[UserRight] CHECK CONSTRAINT [FK_UserRight_RoleMaster]
GO
