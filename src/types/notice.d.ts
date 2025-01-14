/**
 * 返回的数据对象
 */
export interface NoticeList {
  /**
   * 当前页
   */
  current?: number
  /**
   * 总页数
   */
  pages?: number
  /**
   * 分页对象数据
   */
  records?: NoticeItem[]
  /**
   * 每页显示数量
   */
  size?: number
  /**
   * 数量总数
   */
  total?: number
}

/**
 * 分页数据
 */
export interface NoticeItem {
  /**
   * 发布通知的管理员名称
   */
  adminName?: null | string
  /**
   * 浏览量
   */
  browse?: number | null
  /**
   * 审核意见
   */
  comment?: null | string
  /**
   * 系统通知主体内容
   */
  content?: null | string
  /**
   * 通知发送的用户分组id
   */
  groupId?: number | null
  /**
   * 分组名称
   */
  groupName?: null | string
  /**
   * 通知的id
   */
  noticeId?: number | null
  /**
   * 通知发布时间
   */
  publishTime?: null | string
  /**
   * 发布状态，1为未发送，2为待审核，3为审核通过，4为审核未通过，5为正式发布给用户
   */
  state?: number | null
  /**
   * 系统通知标题
   */
  title?: null | string
  /**
   * 通知类型id
   */
  typeId?: number | null
  /**
   * 私发通知的目标用户id(广播通知为0)
   */
  userId?: number | null
  /**
   * 发送的用户id列表
   */
  userIds?: number[] | null
  /**
   * 用户名列表，userid=1时有效
   */
  usernames?: string[] | null
  [property: string]: any
}

/**
 * 通知类型
 */
export interface NoticeType {
  /**
   * 通知类型id
   */
  typeId: number
  /**
   * 通知类型名称
   */
  typeName: string
}
