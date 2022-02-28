
import Vue from 'vue';
import moment from 'moment'
const Realm = require("realm");
const CarSchema = {
    name: "Car",
    properties: {
        make: "string",
        model: "string",
        miles: { type: "int", default: 0 },
    },
};
const PersonSchema = {
    name: "Person",
    properties: {
        name: "string",
        birthday: "date",
        cars: "Car[]",
        picture: "data?", // optional property
    },
};

const UserSchema = {
    name: "USER",
    properties: {
        name: "string",
        image: "USER_IMAGE",
        type: "string",
        uid: "string"
    }
}
const ImageSchema = {
    name: "USER_IMAGE",
    properties: {
        thumnail: 'string',
        source: 'string',
        medium: 'string',
        combiner: { type: 'linkingObjects', objectType: 'USER', property: 'image' }
    }
}
const RoomSchema = {
    name: "ROOM",
    properties: {
        isshow: 'bool',
        admincount: 'int',
        adminUserIds: 'string[]',
        allowlinkinvite: 'bool',
        allowuserinvite: 'bool',
        createdtime: 'string',
        deletedtime: 'string',
        groupavatar: "IMAGEROOM",
        groupname: 'string',
        groupstatusmessage: 'string',
        id: 'string',
        invitelink: 'string',
        isfavorite: 'bool',
        ishidden: 'bool',
        ismarkasunread: 'bool',
        ismute: 'bool',
        ispin: 'bool',
        membercount: 'int',
        memberuserids: 'string[]',
        owneruserid: 'string',
        pendingcount: 'int',
        pendinguserids: 'string[]',
        permission: 'string',
        pinmessage: 'string[]',
        sessionid: 'string',
        sessionname: 'string',
        sessiontype: 'string',
        uniqueids: 'string[]',
        updatedtime: 'string',
        userids: 'string[]',
        user: "USERROOM"
    },
}
const ImageroomSchema = {
    name: "IMAGEROOM",
    properties: {
        medium: 'string',
        source: 'string',
        thumbnail: 'string',
        combiner: { type: 'linkingObjects', objectType: 'ROOM', property: 'groupavatar' }
    }
}
const UserroomSchema = {
    name: 'USERROOM',
    properties: {
        avatar: "string",
        dialCode: "string",
        displayName: "string",
        id: "string",
        mobile: "string",
        permission: "string",
        rename: "string",
        combiner: { type: 'linkingObjects', objectType: 'ROOM', property: 'user' }
    }
}

const MessageSchema = {
    name: "MESSAGE",
    properties: {
        id: "string",
        groupmessageid: "string",
        sessionid: "string",
        messageid: "string",
        referencekey: "string",
        senderid: "string",
        displayname: "string",
        avatar: "string",
        rename: "string",
        readCount: 'int',
        contenttype: "string",
        content: "string",
        media: 'MEDIA',
        cancelmessage: 'bool',
        strangermessage: 'bool',
        blockmessage: 'bool',
        status: "string",
        destructtime: "int",
        disappeartime: "string",
        replymsgId: "string",
        uniqueids: "string[]",
        createdtime: "string",
        updatedtime: "string"
    }

}
const MediaMessageSchema = {
    name: 'MEDIA',
    properties: {
        id: "string",
        imageSource: "string",
        imageMedium: "string",
        imageThumbnail: "string",
        type: "string",
        mediaRefKey: "string",
        width: 'int',
        height: 'int',
        cancelMedia: 'bool',
        combiner: { type: 'linkingObjects', objectType: 'MESSAGE', property: 'media' }
    }
}
Vue.mixin({
    computed: {
        getUserDB: function () {
            //   return  Realm.open({ schema: [UserSchema, ImageSchema] }).then(
            //         (realm) => {

            //             return realm
            //             // for (let i = 0; i < realm.objects("USER").length; i++) {
            //             //     console.log(realm.objects("USER")[i].name);
            //             // }
            //         }
            //     )
        },
        getdataDB: function () {
            // let realmroom = new Realm({schema: [RoomSchema,ImageroomSchema,UserroomSchema]})
            // return realmroom
            return Realm.open({ schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema] }).then(
                (realm) => {
                    return realm

                }
            )

        },
        getCurrentTime: function () {
            const currenttime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            return currenttime
        },
        getProfile: function () {
            const profile = this.$store.getters['auth/profile']
            return profile
        }
        // token(){
        //     const token = this.$store.getters['auth/token']
        //     return token
        // }
        //get Data from here
    },
    methods: {
        // setTokenEx(val){
        //     //example dispatch to action
        //     this.$store.dispatch('auth/setToken',val)
        // }
        //Actions
        updateMessage(session) {
            this.getdataDB.then((data) => {
                let msg = data.objects("MESSAGE").filtered(`sessionid == "${session}"`)
                this.$store.dispatch("chat/setChat", msg)
            })

        },
        addDataToRealm(data, action) {
            Realm.open({ schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema] })
                .then((realm) => {
                    switch (action) {
                        case 'addUser':
                            realm.write(() => {
                                realm.create('USER', {
                                    name: username,
                                    image: useravatar,
                                    type: usertype,
                                    uid: userid
                                })
                            })
                            return false;
                        case 'addRooms':
                            data.map((item) => {
                                realm.write(() => {
                                    realm.create('ROOM', {
                                        isshow: false,
                                        admincount: item.adminCount,
                                        adminUserIds: item.adminUserIds ? item.adminUserIds : [],
                                        allowlinkinvite: item.allowLinkInvite,
                                        allowuserinvite: item.allowUserInvite,
                                        createdtime: item.createdTime,
                                        deletedtime: item.deletedTime,
                                        groupavatar: {
                                            medium: item.groupAvatar.medium,
                                            source: item.groupAvatar.source,
                                            thumbnail: item.groupAvatar.thumbnail
                                        },
                                        groupname: item.groupName,
                                        groupstatusmessage: item.groupStatusMessage,
                                        id: item.id,
                                        invitelink: item.inviteLink,
                                        isfavorite: item.isFavorite,
                                        ishidden: item.isHidden,
                                        ismarkasunread: item.isMarkAsUnread,
                                        ismute: item.isMute,
                                        ispin: item.isPin,
                                        membercount: item.memberCount,
                                        memberuserids: item.memberUserIds ? item.memberUserIds : [],
                                        owneruserid: item.ownerUserId,
                                        pendingcount: item.pendingCount,
                                        pendinguserids: item.pendingUserIds ? item.pendingUserIds : [],
                                        permission: item.permission,
                                        pinmessage: item.pinMessage ? item.pinMessage : [],
                                        sessionid: item.sessionId,
                                        sessionname: item.sessionName,
                                        sessiontype: item.sessionType,
                                        uniqueids: item.uniqueIds ? item.uniqueIds : [],
                                        updatedtime: item.updatedTime,
                                        userids: item.userIds ? item.userIds : ['null'],
                                        user: {
                                            avatar: item.user.avatar,
                                            dialCode: item.user.dialCode,
                                            displayName: item.user.displayName,
                                            id: item.user.id ? item.user.id : 'null',
                                            mobile: item.user.mobile,
                                            permission: item.user.permission,
                                            rename: item.user.rename,
                                        }
                                    })
                                })

                            })
                            return false;
                        case 'addMessage':
                            realm.write(() => {
                                data.map((item) => {
                                    item.messages.map((msg) => {
                                        // let showrooms = realm.objects("ROOM").filtered(`sessionid == "${item.sessionId}"`)
                                        // showrooms.isshow = true
                                        // realm.objects("ROOM").filtered(`sessionid == "${item.sessionId}"`).isshow = true

                                        realm.create('MESSAGE', {
                                            id: item.id,
                                            groupmessageid: item.groupMessageId,
                                            sessionid: item.sessionId,
                                            messageid: msg.messageId,
                                            referencekey: msg.referenceKey,
                                            senderid: msg.senderId,
                                            displayname: msg.displayName,
                                            avatar: msg.avatar,
                                            rename: "null",
                                            readCount: msg.readCount,
                                            contenttype: msg.contentType,
                                            content: msg.content,
                                            createdtime: msg.createdTime,
                                            media: {
                                                id: "",
                                                imageSource: "",
                                                imageMedium: "",
                                                imageThumbnail: "",
                                                type: "",
                                                mediaRefKey: "",
                                                width: 0,
                                                height: 0,
                                                cancelMedia: false,
                                            },
                                            cancelmessage: msg.cancelMessage,
                                            strangermessage: msg.strangerMessage,
                                            blockmessage: msg.blockMessage,
                                            status: msg.status,
                                            destructtime: msg.destructTime,
                                            disappeartime: msg.disappearTime,
                                            replymsgId: msg.replyMsgId,
                                            uniqueids: msg.uniqueIds,
                                            updatedtime: msg.updatedTime
                                        })
                                    })
                                })

                            })
                            return false;
                        case 'updateShow':
                            realm.write(() => {

                                data.map((item) => {
                                    const show = realm.objects("ROOM").filtered(`sessionid == "${item.sessionId}"`)[0]
                                    show.isshow = true

                                })
                            })
                            return false;

                    }
                })
        },
        ClearRealm() {
            Realm.clearTestState();
        }

    }
})