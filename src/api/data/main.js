import request from '@/utils/request'

export function getTest(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function postTest(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

// 用于ArcGIS显示要素
export function getYearAqiData(query) {
  return request({
    url: '/getyearaqidata',
    method: 'get',
    params: query
  })
}
