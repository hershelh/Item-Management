import http from '@/utils/request'
import { NoticeList, NoticeType } from '@/types/notice'

/**
 * 获取单个管理员的系统通知
 * @param state 0查询全部，1查询编辑中，2查询审核中，3查询审核通过和未审核的
 * @param offset 当前页
 * @param limit 每页大小
 * @param content 搜索内容
 * @param type 搜索内容通知类型，0查询全部，其它查询对应的类型
 * @param dateType 时间范围类型，1为近3天，2为近一周，3为近一月，其它为全部
 * @returns 系统通知中每条通知的具体参数
 */
export const getSingleAdminNoticeAPI = (
  state: string,
  offset: number,
  limit: number,
  content: string,
  type: number,
  dateType: number
) => {
  return http<NoticeList>({
    url: `/notice/sys/${state}?offset=${offset}&limit=${limit}&content=${content}&type=${type}&dateType=${dateType}`,
    method: 'GET'
  })
}

/**
 * 获取所有系统通知-已发布给用户的通知
 * @param offset 当前页
 * @param limit 每页大小
 * @param content 搜索内容
 * @param type 搜索内容通知类型，0查询全部，其它查询对应的类型
 * @param dateType 时间范围类型，1为近3天，2为近一周，3为近一月，其它为全部
 * @returns 所有的系统通知
 */
export const getAllNoticeAPI = (
  offset: number,
  limit: number,
  content: string,
  type: number,
  dateType: number
) => {
  return http<NoticeList>({
    url: `/notice/sys/publish/review`,
    method: 'GET',
    params: {
      offset,
      limit,
      content,
      type,
      dateType
    }
  })
}

/**
 * 获取待审核的通知
 * @param offset 当前页
 * @param limit 每页大小
 * @param content 搜索内容
 * @param type 搜索内容通知类型，0查询全部，其它查询对应的类型
 * @param dateType 时间范围类型，1为近3天，2为近一周，3为近一月，其它为全部
 * @returns 所有待审核的通知
 */
export const getPendingAuditNoticeAPI = (
  offset: number,
  limit: number,
  content: string,
  type: number,
  dateType: number
) => {
  return http<NoticeList>({
    url: `/notice/sys/review`,
    method: 'GET',
    params: {
      offset,
      limit,
      content,
      type,
      dateType
    }
  })
}

/**
 * 修改自己的通知内容
 * @param title 通知的标题
 * @param content 通知的内容
 * @param userId 管理员的ID
 * @param noticeId 通知的ID
 * @returns
 */
export const updateNoticeContentAPI = (
  title: string,
  content: string,
  userId: number,
  noticeId: number
) => {
  return http({
    url: `/notice/sys/modify/${noticeId}`,
    method: 'PUT',
    data: {
      title,
      content,
      userId
    }
  })
}

/**
 * 修改通知状态为待审核
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const updateNoticeStateToCheckAPI = (title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/submit/${noticeId}?title=${title}`,
    method: 'PUT'
  })
}

/**
 * 修改通知状态为审核通过
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const updateNoticeStateToPassAPI = (title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/pass/${noticeId}?title=${title}`,
    method: 'PUT'
  })
}

/**
 * 正式发布通知给用户
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const publishNoticeToUserAPI = (title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/publish/${noticeId}?title=${title}`,
    method: 'PUT'
  })
}

/**
 * 驳回系统通知
 * @param comment 审核意见
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const rejectNoticeAPI = (comment: string, title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/reject/${noticeId}?comment${comment}&title=${title}`,
    method: 'PUT'
  })
}

/**
 * 删除自己未提交和被驳回的通知
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const deleteOwnNoticeAPI = (title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/${noticeId}?title=${title}`,
    method: 'DELETE'
  })
}

/**
 * 删除任意通知(要求权限足够)
 * @param title 通知的标题
 * @param noticeId 通知的ID
 * @returns
 */
export const deleteAnyNoticeAPI = (title: string, noticeId: number) => {
  return http({
    url: `/notices/sys/pass/${noticeId}?title=${title}`,
    method: 'DELETE'
  })
}

/**
 * 获取所有通知的类型
 * @returns 所有通知的类型
 */
export const allNoticeTypeAPI = () => {
  return http<NoticeType[]>({
    url: `/notices/sys/type`,
    method: 'GET'
  })
}
/**
 * 添加新通知
 * @param state 请求状态，草稿(未发送)传0，待审核传1
 * @param title 系统通知标题
 * @param content 系统通知主体内容
 * @param userId 系统通知目标用户id(广播或草稿传-1,分组传0)
 * @param groupId 分组对应的id(不是分组或是草稿发送传0)
 * @param typeId 通知类型id，草稿传0
 * @returns 空
 */
export const addNewNoticeAPI = (
  state: number,
  title: string,
  content: string,
  userId: number,
  groupId: number,
  typeId: number
) => {
  return http({
    url: `/notice/sys?state=${state}`,
    method: 'POST',
    data: {
      title,
      content,
      userId,
      groupId,
      typeId
    }
  })
}
