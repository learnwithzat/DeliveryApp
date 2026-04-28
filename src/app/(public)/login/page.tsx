/** @format */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setSuccessMessage('Account created successfully! Please sign in.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (formData.email === 'demo@zatdel.com' && formData.password === 'demo123') {
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 1000);
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
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Welcome Back</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Sign in to your ZATdel account</p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div
          style={{
            background: 'var(--success-bg)',
            border: '1px solid var(--success-ring)',
            borderRadius: 'var(--r-md)',
            padding: '12px',
            marginBottom: 24,
            fontSize: 13,
            color: 'var(--success)',
          }}>
          {successMessage}
        </div>
      )}

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

      {/* Demo Credentials Hint */}
      <div
        style={{
          background: 'var(--brand-light)',
          border: '1px solid var(--brand-ring)',
          borderRadius: 'var(--r-md)',
          padding: '12px',
          marginBottom: 24,
          fontSize: 12,
          color: 'var(--brand)',
        }}>
        <strong>Demo Credentials:</strong><br />
        Email: demo@zatdel.com<br />
        Password: demo123
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
            Email Address
          </label>
          <input
            type='email'
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--bg-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
            placeholder='ahmed@example.com'
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6, color: 'var(--text-secondary)' }}>
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 pr-10 rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--bg-surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
              placeholder='••••••'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 12,
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <input
              type='checkbox'
              checked={formData.rememberMe}
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              className="w-3.5 h-3.5 cursor-pointer accent-[var(--brand)] focus:ring-[var(--brand)]"
            />
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Remember me</span>
          </label>
          <Link href='/forgot-password' style={{ fontSize: 12, color: 'var(--brand)', textDecoration: 'none' }}>
            Forgot password?
          </Link>
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
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
          Don't have an account?{' '}
          <Link href='/register' style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>
            Create account
          </Link>
        </p>
      </form>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '24px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>OR</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      {/* Social Login */}
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