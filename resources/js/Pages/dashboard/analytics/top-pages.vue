<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Top Pages</BCardTitle>
            <div class="flex-shrink-0">
                <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
                    menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -140, crossAxis: 0, mainAxis: 0 }">
                    <template #button-content> <span class="text-muted fs-16"><i
                                class="mdi mdi-dots-vertical align-middle"></i></span> </template>
                    <BDropdownItem>Today</BDropdownItem>
                    <BDropdownItem>Last Week</BDropdownItem>
                    <BDropdownItem>Last Month</BDropdownItem>
                    <BDropdownItem>Current Year</BDropdownItem>
                </BDropdown>
            </div>
        </BCardHeader>
        <BCardBody>
            <div class="table-responsive table-card">
                <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
                    <thead class="text-muted table-light">
                        <tr>
                            <th scope="col" style="width: 62;">Active Page</th>
                            <th scope="col">Active</th>
                            <th scope="col">Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/dashboard-25867</BLink>
                            </td>
                            <td>99</td>
                            <td>25.3%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/chat-24518</BLink>
                            </td>
                            <td>86</td>
                            <td>22.7%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/timeline-27391</BLink>
                            </td>
                            <td>64</td>
                            <td>18.7%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/analytics-26441</BLink>
                            </td>
                            <td>53</td>
                            <td>14.2%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/tasks-29873</BLink>
                            </td>
                            <td>33</td>
                            <td>12.6%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/chats-29964</BLink>
                            </td>
                            <td>20</td>
                            <td>10.9%</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);">/boomash/calendar-29739</BLink>
                            </td>
                            <td>10</td>
                            <td>07.3%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </BCardBody>
    </BCard>
</template>