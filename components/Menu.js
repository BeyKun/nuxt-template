
export const  menu = () => {
    return [
        {
            text: 'Dashboard',
            icon: 'ni ni-shop text-danger',
            route: '/admin/beranda',
        },
        {
            text: 'Lapor',
            icon: 'el-icon-notebook-1 text-danger',
            route: '/admin/lapor'
        },
        {
            text: 'Kagiatan',
            icon: 'el-icon-baseball text-danger',
            route: '/admin/kegiatan'
        },
        {
            text: 'Berita',
            icon: 'el-icon-tickets text-danger',
            route: '/admin/berita'
        },
        {
            text: 'Informasi',
            icon: 'el-icon-info text-danger',
            route: '/admin/informasi'
        },
        {
            text: 'Users',
            icon: 'el-icon-user text-danger',
            route: '/admin/users'
        },
        // {
        //     text: 'Master',
        //     icon: 'el-icon-folder text-danger',
        //     children: [
        //         {
        //             text: "Voucher",
        //             icon: 'el-icon-postcard',
        //             route: '/admin/master/voucher'
        //         },
        //         {
        //             text: "Announcements",
        //             icon: 'el-icon-s-promotion',
        //             route: '/admin/master/announcements'
        //         },
        //         {
        //             text: "Bookstores",
        //             icon: 'el-icon-notebook-1',
        //             route: '/admin/master/bookstores'
        //         },
        //         {
        //             text: "Claim Category",
        //             icon: 'el-icon-tickets',
        //             route: '/admin/master/claim_category'
        //         },
        //         {
        //             text: "Skill",
        //             icon: 'el-icon-medal',
        //             route: '/admin/master/kemampuan'
        //         },
        //     ]
        // },
        // {
        //     text: 'Setting',
        //     icon: 'el-icon-setting text-danger',
        //     children: [
        //         {
        //             text: 'Point',
        //             icon: 'el-icon-coin',
        //             route: '/admin/settings/point'
        //         },
        //         {
        //             text: "User Admin",
        //             icon: 'el-icon-user',
        //             route: '/admin/master/admin'
        //         },
        //         {
        //             text: 'Agreement Claim Wallet',
        //             icon: 'el-icon-wallet',
        //             route: '/admin/settings/agreement-claim-wallet'
        //         },
        //         // {
        //         //     text: 'Rewards',
        //         //     icon: 'el-icon-trophy',
        //         //     route: '/admin/settings/rewards'
        //         // },
        //         // {
        //         //     text: 'Notification',
        //         //     icon: 'el-icon-bell',
        //         //     route: '/admin/settings/notification'
        //         // }
        //     ]
        // },
    ]
};
