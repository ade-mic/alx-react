import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions', () => {
    test('getFullYear returns the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
    
    test('getFooterCopy returns the correct string when arguement is true or false', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('getLatestNotificstion returns the correct string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
})