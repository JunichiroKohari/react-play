import { memo } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/input/Input'

export const SearchInput = memo(() => {
  return (
    <div className="search-input-container">
      <Input placeholder="検索条件を入力" />
      <div className='search-input-btn-wrapper'>
        <PrimaryButton>検索</PrimaryButton>
      </div>
    </div>
  )
})