/** @format */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (!formData.agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push('/login?registered=true');
    }, 1500);
  };

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        borderRadius: 'var(--r-lg)',
        padding: '40px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-lg)',
      }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 'var(--r-md)',
            background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2.2'>
            <path d='M12 2L2 7l10 5 10-5-10-5z' />
            <path d='M2 17l10 5 10-5' />
            <path d='M2 12l10 5 10-5' />
          </svg>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Create Account</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Join ZATdel and start managing your deliveries</p>
      </div>

      {/* Error Message */}
      {error && (
        <div
          style={{
            background: 'var(--danger-bg)',
            border: '1px solid var(--danger-ring)',
            borderRadius: 'var(--r-md)',
            padding: '12px',
            marginBottom: 24,
            fontSize: 13,
            color: 'var(--danger)',
          }}>
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
              Full Name *
            </label>
            <input
              type='text'
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--r-md)',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                fontSize: 13,
              }}
              placeholder='Ahmed Al-Farsi'
            />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
              Company Name
            </label>
            <input
              type='text'
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--r-md)',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                fontSize: 13,
              }}
              placeholder='Your business name'
            />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
            Email Address *
          </label>
          <input
            type='email'
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--border)',
              background: 'var(--bg-surface)',
              fontSize: 13,
            }}
            placeholder='ahmed@example.com'
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
            Phone Number *
          </label>
          <input
            type='tel'
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--border)',
              background: 'var(--bg-surface)',
              fontSize: 13,
            }}
            placeholder='+966 5X XXX XXXX'
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
              Password *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-surface)',
                  fontSize: 13,
                  paddingRight: '35px',
                }}
                placeholder='••••••'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 16,
                  color: 'var(--text-muted)',
                }}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
              Confirm Password *
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--r-md)',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                fontSize: 13,
              }}
              placeholder='••••••'
            />
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <input
              type='checkbox'
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              style={{ width: 16, height: 16, cursor: 'pointer' }}
            />
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              I agree to the{' '}
              <Link href='/terms' style={{ color: 'var(--brand)', textDecoration: 'none' }}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href='/privacy' style={{ color: 'var(--brand)', textDecoration: 'none' }}>
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type='submit'
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 'var(--r-md)',
            background: 'var(--brand)',
            color: '#fff',
            border: 'none',
            fontSize: 14,
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: 20,
          }}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
          Already have an account?{' '}
          <Link href='/login' style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>
            Sign in
          </Link>
        </p>
      </form>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '24px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>OR</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      {/* Social Sign Up */}
      <div style={{ display: 'flex', gap: 12 }}>
        <button
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontSize: 13,
          }}>
          <span>G</span> Google
        </button>
        <button
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontSize: 13,
          }}>
          <span>f</span> Facebook
        </button>
      </div>
    </div>
  );
}