import React, { StrictMode } from 'react'
import Tabs from 'antd/es/tabs'
import 'antd/es/tabs/style/index.css'
import { body, panel } from './elements'
import { Panel } from './Panel'

type Props = {}

const array = new Array(100).fill(1)

export default function App(props: Props) {
  return (
    <div>
      <h1 title={'abc'}>Hello World👌</h1>
      <p className="empty"></p>
      <Tabs>
        <Tabs.TabPane key={'tool'} tab={'物料'}>
          {body}
          <p className="empty"></p>
          <Panel />
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, background: '#c7e29c' }}>cell2</div>
            <div style={{ flex: 1, background: '#b39dde' }}>cell1</div>
          </div>
          <p>simple 66xxxxxasdasdas6</p>
          <p>
            nested
            <strong>hahahax</strong>
          </p>
          {array.map((x, i) => (
            <p key={i}>
              <div>物料_a_zzb{i}</div>
              <div>物料_b_{i}</div>
            </p>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane key={'attr'} tab={'属性'}></Tabs.TabPane>
        {panel}
      </Tabs>
    </div>
  )
}
