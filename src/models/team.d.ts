import {UserType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    name: string;
    description: string;
    expireTime?: Date;
    maxNum: number;
    password?: string;
    // todo 定义枚举类型 更加规范
    status:number;
    userId:number,
    createTime: Date;
    updateTime: Date;
    createUser?: UserType;
    hasJoin:boolean; // 权限控制
    hasJoinNum:number;
}