---
title: "6. 添加触发和事件"
metaTitle: "趣味互动营销HTML内容快速制作与发布的平台"
metaDescription: "趣show是一个提供趣味互动营销HTML内容快速制作与发布的平台，为千万的品牌主，中小商家和自媒体提供全新的互动营销视频制作技术支持与营销生态整合。"
---
   触发和事件是趣show交互内容展现方式的重点之一。通过对组件进行触发和事件属性的添加，可以让用户制作的HTML页面中的内容在播放过程中体现更多的交互性，多样性和趣味性，同时，不同的组件之间也可以相互左触发和事件动作。

## 6.1触发：

       触发是指用户通过对指定的组件进行行为的关联，来设置一个行为的触发条件。触发行为的类型包括3类：

手势：

        单击：手指触碰屏幕并马上离开的动作。

        双击：手指连续触碰屏幕两次的动作。

鼠标：

                鼠标悬浮：使用鼠标可触发的动作。鼠标停留在目标对象上方时会触发一系列反应动作。

        鼠标移出：使用鼠标可触发的动作。鼠标离开目标对象上方时会触发一系列反应动作。

条件性触发：

        监听： 当视频或者音频播放到一定时间点后，对目标对象触发一系列的反应动作

        摇一摇： 针对移动端用户，摇一摇手机可以触发关联的事件动作

### 6.1.1 添加触发：

       用户在选定一个组件后可以通过点击页面右侧中的【触发】框，对该组件进行触发行为的关联。

![](https://tcs-ga.teambition.net/storage/111p2baadd1878f6f54a6254c58a6da1d8eb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXAyYmFhZGQxODc4ZjZmNTRhNjI1NGM1OGE2ZGExZDhlYiJ9.WL4aJqbpzogpgpGqkpfbN8JW9DabMdC-ErGwG5_eaeI&download=1578310128543-65071ff0-8793-4d79-b012-c124a538f7ef.png "")

 

## 6.2 事件：

       事件是指组件的各种展现动作，主要类型包括：移动，大小，透明，颜色，转场，链接，文本，播放等。用户可以为相同或者不同的组件添加被触发后的事件。

### **6.2.1 事件的添加**

       组件在选择完触发条件后，页面会出现【添加事件】的按钮，点击按钮后，就会出现各种触发后事件动作的选项。然后在【触发元素】中选择你希望被触发的组件，就可以完成一次事件添加。

![](https://tcs-ga.teambition.net/storage/111pc56a8c53a705c33ab735c2035d432446?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXBjNTZhOGM1M2E3MDVjMzNhYjczNWMyMDM1ZDQzMjQ0NiJ9.1qLglzISujgOn65ozFKaA0Zn2H6dl_Rm3iAypjazw8s&download=1578310128887-69346538-4d03-4e17-bb5c-a46ad9ca8629.png "")

 

### **6.2.2 移动**

       选择【移动】事件，选定的组件在触发后可以移动到制定位置。同时可以设置移动的延时和移动的时长。移动的位置可以在下图的红框中设定。数值为正数时代表组件可以向左，向上移动。数值为负数时代表组件可以向右，向下移动。

![](https://tcs-ga.teambition.net/storage/111p5a6edce1d41e6e48a0e8aa247e20037a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXA1YTZlZGNlMWQ0MWU2ZTQ4YTBlOGFhMjQ3ZTIwMDM3YSJ9.4pGk5HH0Jq2iKRbHHcIMAbxirvD-l-9Pv_vnFyNpx5E&download=1578310129274-8f9b1fa2-07b2-4924-98ea-2155bb793932.png "")

 

Tips：为了准确和快速的输入想要移动的目的地坐标，用户可以单独添加一个组件，把它放到想要移动到的位置，记住这个位置的坐标，在点击原来的组件，在右侧填写移动的坐标就可以了。然后删除新增加的组件即可。

![](https://tcs-ga.teambition.net/storage/111p71794c77b05378a263e8e90e9a879cfe?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXA3MTc5NGM3N2IwNTM3OGEyNjNlOGU5MGU5YTg3OWNmZSJ9._8Hdyus8p1KbRYS2tESoco7RZnLyuuzEkK-pcHNmwdY&download=1578310129622-14a30d76-00bd-41c7-8d1e-b416e4e9050f.png "")

 

### **6.2.3 大小**

       选择【大小】事件，选定的组件在触发后可以进行放大或缩小。同时可以设置缩放的延时和时长。缩放的大小可以在下图的红框中的【大小】条件框中设定。数值为正数时代表组件可以放大，数值为负数时代表组件可以缩小。

![](https://tcs-ga.teambition.net/storage/111p3f59d7fb3e12e036102e69fc88022cb5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXAzZjU5ZDdmYjNlMTJlMDM2MTAyZTY5ZmM4ODAyMmNiNSJ9.W9s7NbFZizTdk5LET4JWgNMdukuliIy3dBq5mTql-zg&download=1578310130052-575231f3-bd2d-4d4b-9bd1-fcbfb2bc16dc.png "")

 

### **6.2.4 透明：**

       选择【透明】事件，选定的组件在触发后可以进行透明度的变化。同时可以设置透明的延时和时长。透明度的数字调到0时，表示组件在页面里完全透明不显示。

![](https://tcs-ga.teambition.net/storage/111p751574475659e2f5441d2337a9dbc82e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXA3NTE1NzQ0NzU2NTllMmY1NDQxZDIzMzdhOWRiYzgyZSJ9.HwDZy8WNiAEft_0GCMjdt0g540_52KTLghCy1MFBzxE&download=1578310130464-36213b8e-53d3-4f98-901b-47a91434d662.png "")

 

### **6.2.5 **颜色：

       选择【颜色】事件，选定的元素在触发后可以进行颜色的变化。同时可以设置颜色变化的延时和时长。

![](https://tcs-ga.teambition.net/storage/111p0c75911eb5d18d8f344954800a2887d4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXAwYzc1OTExZWI1ZDE4ZDhmMzQ0OTU0ODAwYTI4ODdkNCJ9.rr-tPrIqkUev0S_3QYIU458Vj0GlHMUjhvmRafkw7QY&download=1578310130835-e73a72bc-a87c-40b6-98e8-20e173be960d.png "")

 

### **6.2.6 **转场：

       选择【转场】事件，当前的场景页面在触发后可以跳转到任意一个指定的场景页面。点击右侧属性智能面板页面中的【跳转到】可以选择想要跳转的页面。

![](https://tcs-ga.teambition.net/storage/111pa502768aa95577829eb1a5867165ee43?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXBhNTAyNzY4YWE5NTU3NzgyOWViMWE1ODY3MTY1ZWU0MyJ9.NIRazPUrQaJqUk4Hax5ZxW9qH2CZ_wf4CMX0enG-jms&download=1578310131206-ea62c0b6-5e4c-4655-8819-d1da4b6c2dbe.png "")

 

### **6.2.7 **链接：

       选择【链接】事件，当前的场景页面在触发后可以跳转到任意一个指定的网页页面。点击右侧属性智能面板中的【跳转到】可以选择想要跳转的页面

![](https://tcs-ga.teambition.net/storage/111p488d939e323e84e52e694446c1860ab1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXA0ODhkOTM5ZTMyM2U4NGU1MmU2OTQ0NDZjMTg2MGFiMSJ9.eb9FAcjdjS7lVg9gYN4h8dWyhDApLSMvPFHgaFPDkYc&download=1578310131712-d4867d2b-5b29-4023-8a9e-f6fd1becca67.png "")

 

### **6.2.8 文本：**

       选择【文本】事件，当前的组件在触发后可以出现文本。点击右侧属性智能面板中的【文本】可以选择想要出现的文本字符，大小和位置等。

![](https://tcs-ga.teambition.net/storage/111pd4c561b9ea10545124fb9e9952c5bd5a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXBkNGM1NjFiOWVhMTA1NDUxMjRmYjllOTk1MmM1YmQ1YSJ9.rkaqfloa7GvXIn9MIHGAItI71naKQf_mSEhw7kGZN6c&download=1578310132093-d72ec2c4-fdc4-41dd-9075-ddb1ef831993.png "")

 

### 6.2.9 播放：

       选择【播放】事件，当前的场景页面在触发后可以跳转到任意一个指定的网页页面。点击右侧属性智能面板中的【跳转到】可以选择想要跳转的页面

## 6.3 连续的触发和事件

       对同一组件或容器可以进行连续的触发和事件。选择元素后可以反复点击添加事件】和【添加触发条件】，以增加多个触发和事件，提高页面的变化性。

![](https://tcs-ga.teambition.net/storage/111pcae5848a8e171fd0a99b2b30b223ca7c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTU3OTE2NzQ3OCwiaWF0IjoxNTc4NTYyNjc4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXBjYWU1ODQ4YThlMTcxZmQwYTk5YjJiMzBiMjIzY2E3YyJ9.0FsH6zuMzdnG2ErgMwXN540btZi2IMzHSePBhAV31c0&download=1578310132509-41e98155-3e23-48e3-931f-e53558935f37.png "")

 

