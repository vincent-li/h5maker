<script>
    import SvgIcon from '@components/svg-icons';
    import Input from '@components/input';
    const params = {};
</script>

<div>
    <div class="form-item">
        <div class="form-lable">
            <SvgIcon type="Star" width="14px" height="14px" fill="#155bd4" />
            <span>页面名称</span>
        </div>
        <div>
            <Input />
        </div>
    </div>
    <div class="form-item">
        <div class="form-lable">
            <span>页面描述</span>
        </div>
        <div>
            <Input />
        </div>
    </div>
    <div class="form-item-lr">
        <span class="item-lr-title">背景颜色</span>
        <div>

        </div>
    </div>
</div>

<style>
    * :global(.form-item){
        margin-bottom: 16px;
    }
    * :global(.form-item-lr){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    * :global(.form-lable) {
        margin-bottom: 6px;
    }
    * :global(.item-lr-title){
        margin-right: 16px;
        font-size: 14px;
        color: #969799;
        line-height: 18px;
        white-space: nowrap;
    }
</style>
